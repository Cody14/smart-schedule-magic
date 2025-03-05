
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import TeacherChips, { TeacherChip } from '@/components/schedule/TeacherChips';

interface CombinedPersonnelPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTeachers: string[];
  handleTeacherClick: (teacher: TeacherChip) => void;
  teachers: TeacherChip[];
}

const CombinedPersonnelPanel: React.FC<CombinedPersonnelPanelProps> = ({
  searchQuery,
  setSearchQuery,
  selectedTeachers,
  handleTeacherClick,
  teachers,
}) => {
  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    teacher.initials.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="shadow-sm border">
      <CardContent className="p-3 space-y-2">
        {/* Top row with selection and controls */}
        <div className="flex flex-wrap gap-2 items-start">
          <div className="grow min-w-[220px]">
            <div className="flex items-center justify-between mb-1">
              <Label className="text-xs font-medium">Select Personnel</Label>
              <span className="text-xs text-gray-500">{selectedTeachers.length}/{teachers.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search personnel..."
                  className="pl-7 h-7 text-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="option-1">
                <SelectTrigger className="h-7 text-xs w-52">
                  <SelectValue placeholder="Control position number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-1">Option 1</SelectItem>
                  <SelectItem value="option-2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-2 p-1.5 border rounded-md bg-gray-50 h-16 overflow-y-auto">
              <TeacherChips 
                teachers={filteredTeachers} 
                selectedTeachers={selectedTeachers}
                onTeacherClick={handleTeacherClick}
                selectable
                size="sm"
              />
            </div>
          </div>
          
          {/* Comment section */}
          <div className="grow min-w-[220px]">
            <Label className="text-xs font-medium mb-1 inline-block">Comment</Label>
            <Textarea
              placeholder="Add a comment..."
              className="resize-none h-[70px] text-xs"
              rows={3}
            />
          </div>
        </div>
        
        {/* Settings grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-1">
          <div>
            <Label htmlFor="min-positions" className="text-xs font-medium mb-0.5 inline-block">
              Min. positions pr. day
            </Label>
            <Select defaultValue="2">
              <SelectTrigger className="h-7 text-xs">
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
            <Label htmlFor="max-positions" className="text-xs font-medium mb-0.5 inline-block">
              Max. positions pr. day
            </Label>
            <Select defaultValue="6">
              <SelectTrigger className="h-7 text-xs">
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
            <Label htmlFor="max-location-shifts" className="text-xs font-medium mb-0.5 inline-block">
              Max. location shifts pr. day
            </Label>
            <Select defaultValue="3">
              <SelectTrigger className="h-7 text-xs">
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
            <Label htmlFor="max-working-time" className="text-xs font-medium mb-0.5 inline-block">
              Max. working time in period
            </Label>
            <Select defaultValue="8">
              <SelectTrigger className="h-7 text-xs">
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
            <Label htmlFor="max-gap-hours" className="text-xs font-medium mb-0.5 inline-block">
              Max. gap hours pr. week
            </Label>
            <Select defaultValue="4">
              <SelectTrigger className="h-7 text-xs">
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
            <Label htmlFor="min-consecutive-gap" className="text-xs font-medium mb-0.5 inline-block">
              Min. consecutive gap hours
            </Label>
            <Select defaultValue="2">
              <SelectTrigger className="h-7 text-xs">
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
        
        {/* Checkboxes */}
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="count-bindings" className="h-3.5 w-3.5" />
            <Label htmlFor="count-bindings" className="text-xs">
              Count bindings without classes
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="time-every-day" className="h-3.5 w-3.5" />
            <Label htmlFor="time-every-day" className="text-xs">
              Time every day
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CombinedPersonnelPanel;
