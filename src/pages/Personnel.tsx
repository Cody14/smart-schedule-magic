
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
import { Check, X, ChevronUp, ChevronDown, Edit2 } from 'lucide-react';

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
  
  const handleTeacherClick = (teacher: TeacherChip) => {
    setSelectedTeachers(prev => 
      prev.includes(teacher.id) 
        ? prev.filter(id => id !== teacher.id) 
        : [...prev, teacher.id]
    );
  };
  
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Personnel Management</h1>
        </div>
        
        <Tabs defaultValue="personnel" className="w-full">
          <TabsList className="w-full border-b pb-0 mb-6">
            <TabsTrigger
              value="personnel"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'personnel' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('personnel')}
            >
              Personnel
            </TabsTrigger>
            <TabsTrigger
              value="classes"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'classes' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('classes')}
            >
              Classes
            </TabsTrigger>
            <TabsTrigger
              value="teams"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'teams' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('teams')}
            >
              Teams
            </TabsTrigger>
            <TabsTrigger
              value="subjects"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'subjects' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('subjects')}
            >
              Subjects
            </TabsTrigger>
            <TabsTrigger
              value="rooms"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'rooms' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('rooms')}
            >
              Rooms
            </TabsTrigger>
            <TabsTrigger
              value="rules"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'rules' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('rules')}
            >
              Rules
            </TabsTrigger>
            <TabsTrigger
              value="periods"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-t-md",
                activeTab === 'periods' ? "bg-white border-t border-l border-r border-b-0 border-gray-200" : "bg-gray-50"
              )}
              onClick={() => setActiveTab('periods')}
            >
              Periods
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="personnel" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 space-y-4">
                <div className="bg-white border rounded-md p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-700">Select Personnel</h3>
                    <span className="text-xs text-gray-500">25/124</span>
                  </div>
                  <div className="flex flex-wrap gap-1 max-h-96 overflow-y-auto p-2 border rounded-md mb-4">
                    <TeacherChips 
                      teachers={TEACHER_CHIPS} 
                      selectedTeachers={selectedTeachers}
                      onTeacherClick={handleTeacherClick}
                      selectable
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white border rounded-md p-4 shadow-sm">
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
                    
                    <div className="grid grid-cols-2 gap-4">
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
                  </div>
                  
                  <div className="bg-white border rounded-md p-4 shadow-sm">
                    <div className="mb-4">
                      <Label htmlFor="comment" className="text-sm font-medium">
                        Comment
                      </Label>
                      <Textarea
                        id="comment"
                        placeholder="Add a comment..."
                        className="mt-1 resize-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="bg-white border rounded-md p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                        <X className="w-4 h-4 mr-1" />
                        Can not
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-600">
                        <X className="w-4 h-4 mr-1" />
                        Prefer not
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                        <Check className="w-4 h-4 mr-1" />
                        Prefer work
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                        <Check className="w-4 h-4 mr-1" />
                        Must work
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        remove
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Select
                      </Button>
                    </div>
                  </div>
                  
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
                  
                  <TimetableGrid className="mt-4" />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="outline">Save</Button>
                  <Button variant="outline">Delete</Button>
                  <Button>Add</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="classes">
            <div className="py-6 text-center text-gray-500">
              Classes management will be implemented in the next phase.
            </div>
          </TabsContent>
          
          <TabsContent value="teams">
            <div className="py-6 text-center text-gray-500">
              Teams management will be implemented in the next phase.
            </div>
          </TabsContent>
          
          <TabsContent value="subjects">
            <div className="py-6 text-center text-gray-500">
              Subjects management will be implemented in the next phase.
            </div>
          </TabsContent>
          
          <TabsContent value="rooms">
            <div className="py-6 text-center text-gray-500">
              Rooms management will be implemented in the next phase.
            </div>
          </TabsContent>
          
          <TabsContent value="rules">
            <div className="py-6 text-center text-gray-500">
              Rules management will be implemented in the next phase.
            </div>
          </TabsContent>
          
          <TabsContent value="periods">
            <div className="py-6 text-center text-gray-500">
              Periods management will be implemented in the next phase.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Personnel;
