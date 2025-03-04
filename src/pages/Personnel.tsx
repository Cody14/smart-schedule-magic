import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TeacherChips, { TeacherChip } from '@/components/schedule/TeacherChips';
import TimetableGrid from '@/components/schedule/TimetableGrid';
import ScheduleIndicator from '@/components/schedule/ScheduleIndicator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { 
  Check, X, ChevronDown, ChevronRight, Search, 
  Trash, Plus, Save, RotateCw 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const TEACHER_CHIPS: TeacherChip[] = [
  { id: 'bc', initials: 'BC', name: 'Bob Chen' },
  { id: 'cf', initials: 'CF', name: 'Catherine Fox' },
  { id: 'em', initials: 'EM', name: 'Eric Miller' },
  { id: 'hu', initials: 'HU', name: 'Helen Underwood' },
  { id: 'jm', initials: 'JM', name: 'James Mitchell' },
  { id: 'lc', initials: 'LC', name: 'Linda Campbell' },
  { id: 'lp', initials: 'LP', name: 'Laura Peters' },
  { id: 'bd', initials: 'BD', name: 'Brian Davis' },
  { id: 'je', initials: 'JE', name: 'Jessica Evans' },
  { id: 'fc', initials: 'FC', name: 'Frank Clark' },
  { id: 'kp', initials: 'KP', name: 'Kevin Phillips' },
  { id: 'lm', initials: 'LM', name: 'Lisa Martin' },
  { id: 'ma', initials: 'MA', name: 'Michael Anderson' },
  { id: 'bo', initials: 'BO', name: 'Barbara Olson' },
  { id: 'el', initials: 'EL', name: 'Edward Lewis' },
  { id: 'ho', initials: 'HO', name: 'Hannah Owens' },
  { id: 'ju', initials: 'JU', name: 'Julia Underwood' },
  { id: 'ks', initials: 'KS', name: 'Keith Simpson' },
  { id: 'lo', initials: 'LO', name: 'Logan Owens' },
  { id: 'ms', initials: 'MS', name: 'Melissa Smith' },
  { id: 'ch', initials: 'CH', name: 'Charles Hamilton' },
  { id: 'en', initials: 'EN', name: 'Emma Nelson' },
  { id: 'ir', initials: 'IR', name: 'Ian Richards' },
  { id: 'kh', initials: 'KH', name: 'Katherine Hughes' },
  { id: 'll', initials: 'LL', name: 'Laura Lawson' },
  { id: 'ls', initials: 'LS', name: 'Lucas Scott' },
];

const Personnel = () => {
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>(['bc', 'cf', 'em', 'hu', 'jm', 'lc', 'lp']);
  const [activeTab, setActiveTab] = useState<string>('personnel');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  
  const filteredTeachers = TEACHER_CHIPS.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    teacher.initials.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleTeacherClick = (teacher: TeacherChip) => {
    setSelectedTeachers(prev => 
      prev.includes(teacher.id) 
        ? prev.filter(id => id !== teacher.id) 
        : [...prev, teacher.id]
    );
    toast({
      title: prev.includes(teacher.id) ? "Teacher removed" : "Teacher added",
      description: `${teacher.name} has been ${prev.includes(teacher.id) ? "removed from" : "added to"} your selection.`,
      duration: 2000,
    });
  };

  const prev = { includes: (id: string) => selectedTeachers.includes(id) };
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your changes have been successfully saved.",
      duration: 2000,
    });
  };
  
  const tabItems = ['personnel', 'classes', 'teams', 'subjects', 'rooms', 'rules', 'periods'];
  
  return (
    <Layout>
      <div className="relative w-full">
        <div className="w-full bg-white border-b flex overflow-x-auto">
          {tabItems.map((tab) => (
            <button
              key={tab}
              className={cn(
                "px-6 py-4 text-sm font-medium capitalize border-b-2 whitespace-nowrap",
                activeTab === tab 
                  ? "border-blue-600 text-blue-600" 
                  : "border-transparent hover:text-blue-600 text-gray-600"
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="p-4">
          {activeTab === 'personnel' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-4">
                  <Card className="shadow-sm border">
                    <CardHeader className="pb-3 border-b">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-medium">Select Personnel</CardTitle>
                        <span className="text-xs text-gray-500">{selectedTeachers.length}/{TEACHER_CHIPS.length}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-3">
                      <div className="mb-4 relative">
                        <Search className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          type="text"
                          placeholder="Search personnel..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 p-3 border rounded-md mb-4">
                        <TeacherChips 
                          teachers={filteredTeachers} 
                          selectedTeachers={selectedTeachers}
                          onTeacherClick={handleTeacherClick}
                          selectable
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm border">
                    <CardHeader className="pb-3 border-b">
                      <CollapsibleTrigger asChild className="w-full">
                        <div className="flex items-center justify-between cursor-pointer">
                          <CardTitle className="text-base font-medium">Teacher Settings</CardTitle>
                          {isSettingsOpen ? (
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          )}
                        </div>
                      </CollapsibleTrigger>
                    </CardHeader>
                    
                    <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                      <CollapsibleContent>
                        <CardContent className="pt-3">
                          <div className="mb-4">
                            <Label htmlFor="control-number" className="text-sm font-medium mb-2 inline-block">
                              Control position number
                            </Label>
                            <Select defaultValue="option-1">
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="option-1">Option 1</SelectItem>
                                <SelectItem value="option-2">Option 2</SelectItem>
                                <SelectItem value="option-3">Option 3</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <Label htmlFor="min-positions" className="text-sm font-medium mb-2 inline-block">
                                Min. positions pr. day
                              </Label>
                              <Select defaultValue="2">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="max-positions" className="text-sm font-medium mb-2 inline-block">
                                Max. positions pr. day
                              </Label>
                              <Select defaultValue="6">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[3, 4, 5, 6, 7, 8].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="max-location-shifts" className="text-sm font-medium mb-2 inline-block">
                                Max. location shifts pr. day
                              </Label>
                              <Select defaultValue="3">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="max-working-time" className="text-sm font-medium mb-2 inline-block">
                                Max. working time in period
                              </Label>
                              <Select defaultValue="8">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[6, 7, 8, 9, 10].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="max-gap-hours" className="text-sm font-medium mb-2 inline-block">
                                Max. gap hours pr. week
                              </Label>
                              <Select defaultValue="4">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[2, 3, 4, 5, 6].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label htmlFor="min-consecutive-gap" className="text-sm font-medium mb-2 inline-block">
                                Min. consecutive gap hours
                              </Label>
                              <Select defaultValue="2">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4].map(i => (
                                    <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="count-bindings" />
                              <Label htmlFor="count-bindings" className="text-sm">
                                Count bindings without classes
                              </Label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Checkbox id="time-every-day" />
                              <Label htmlFor="time-every-day" className="text-sm">
                                Time every day
                              </Label>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                  
                  <Card className="shadow-sm border">
                    <CardHeader className="pb-3 border-b">
                      <CardTitle className="text-base font-medium">Comment</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-3">
                      <Textarea
                        placeholder="Add a comment..."
                        className="resize-none"
                        rows={4}
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-8">
                  <Card className="shadow-sm border">
                    <CardHeader className="pb-3 border-b">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-4">
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <X className="h-4 w-4 mr-1 text-red-500" />
                            Can not
                          </Button>
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <X className="h-4 w-4 mr-1 text-orange-500" />
                            Prefer not
                          </Button>
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <Check className="h-4 w-4 mr-1 text-blue-500" />
                            Prefer work
                          </Button>
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <Check className="h-4 w-4 mr-1 text-indigo-600" />
                            Must work
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <Trash className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                          <Button variant="outline" size="sm" className="text-gray-700">
                            <Check className="h-4 w-4 mr-1" />
                            Select
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-4">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-6">
                          <ScheduleIndicator type="prefer-work" className="mr-2" />
                          <span className="text-sm text-gray-700">Prefer work</span>
                        </div>
                        <div className="flex items-center">
                          <ScheduleIndicator type="must-work" className="mr-2" />
                          <span className="text-sm text-gray-700">Must work</span>
                        </div>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <TimetableGrid />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="outline" onClick={handleSave}>Save</Button>
                    <Button variant="outline" className="text-red-600">Delete</Button>
                    <Button>Add</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== 'personnel' && (
            <div className="py-10 text-center text-gray-500 bg-white rounded-md border border-dashed">
              <h3 className="text-lg font-medium capitalize">{activeTab} management</h3>
              <p className="mt-2">This feature will be implemented in the next phase.</p>
              <Button className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add {activeTab.slice(0, -1)}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Personnel;
