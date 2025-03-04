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
  Check, X, ChevronDown, ChevronRight, Edit2, Search, 
  RotateCcw, Plus, Trash, Save, Download, Upload, Printer 
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
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>(['bc', 'cf', 'em', 'hu']);
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
  
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Personnel Management</h1>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Undo changes</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Import CSV</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export CSV</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Printer className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Print</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <Tabs defaultValue="personnel" className="w-full">
          <TabsList className="w-full mb-6 bg-white border-b overflow-x-auto flex items-center">
            {['personnel', 'classes', 'teams', 'subjects', 'rooms', 'rules', 'periods'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "px-4 py-2 text-sm font-medium capitalize",
                  activeTab === tab ? "border-b-2 border-primary" : "hover:text-primary"
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="personnel" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">Select Personnel</CardTitle>
                      <span className="text-xs text-gray-500">{selectedTeachers.length}/{TEACHER_CHIPS.length}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Search personnel..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1 max-h-96 overflow-y-auto p-2 border rounded-md mb-4">
                      <TeacherChips 
                        teachers={filteredTeachers} 
                        selectedTeachers={selectedTeachers}
                        onTeacherClick={handleTeacherClick}
                        selectable
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center cursor-pointer">
                            <CardTitle className="text-sm font-medium">Teacher Settings</CardTitle>
                            {isSettingsOpen ? (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            ) : (
                              <ChevronRight className="ml-2 h-4 w-4" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                      </div>
                    </CardHeader>
                    <CollapsibleContent>
                      <CardContent>
                        <div className="mb-4">
                          <Label htmlFor="control-number" className="text-sm font-medium">
                            Control position number
                          </Label>
                          <Select defaultValue="option-1">
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="option-1">Option 1</SelectItem>
                              <SelectItem value="option-2">Option 2</SelectItem>
                              <SelectItem value="option-3">Option 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="min-positions" className="text-sm font-medium">
                              Min. positions pr. day
                            </Label>
                            <Select defaultValue="2">
                              <SelectTrigger className="mt-1">
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
                            <Label htmlFor="max-positions" className="text-sm font-medium">
                              Max. positions pr. day
                            </Label>
                            <Select defaultValue="6">
                              <SelectTrigger className="mt-1">
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
                            <Label htmlFor="max-location-shifts" className="text-sm font-medium">
                              Max. location shifts pr. day
                            </Label>
                            <Select defaultValue="3">
                              <SelectTrigger className="mt-1">
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
                            <Label htmlFor="max-working-time" className="text-sm font-medium">
                              Max. working time in period
                            </Label>
                            <Select defaultValue="8">
                              <SelectTrigger className="mt-1">
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
                            <Label htmlFor="max-gap-hours" className="text-sm font-medium">
                              Max. gap hours pr. week
                            </Label>
                            <Select defaultValue="4">
                              <SelectTrigger className="mt-1">
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
                            <Label htmlFor="max-consecutive" className="text-sm font-medium">
                              Max. consecutive gap hours
                            </Label>
                            <Select defaultValue="2">
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4].map(i => (
                                  <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="min-consecutive" className="text-sm font-medium">
                              Min. consecutive gap hours
                            </Label>
                            <Select defaultValue="1">
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {[0, 1, 2, 3].map(i => (
                                  <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
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
                  </Card>
                </Collapsible>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Comment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Add a comment..."
                      className="resize-none"
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="col-span-1 lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                          <X className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Can not</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-600">
                          <X className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Prefer not</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                          <Check className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Prefer work</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                          <Check className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Must work</span>
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <Trash className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Remove</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <Check className="w-4 h-4 mr-1" />
                          <span className="hidden sm:inline">Select</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mt-2 mb-4">
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
                      <TimetableGrid className="mt-4" />
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex flex-wrap justify-end space-x-0 sm:space-x-3 gap-2 sm:gap-0">
                  <Button variant="outline">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button variant="outline" onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="text-red-600 hover:bg-red-50">
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {['classes', 'teams', 'subjects', 'rooms', 'rules', 'periods'].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="py-10 text-center text-gray-500 bg-white rounded-md border border-dashed">
                <h3 className="text-lg font-medium capitalize">{tab} management</h3>
                <p className="mt-2">This feature will be implemented in the next phase.</p>
                <Button className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add {tab.slice(0, -1)}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Personnel;
