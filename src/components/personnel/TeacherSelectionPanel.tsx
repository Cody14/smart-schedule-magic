
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TeacherChips, { TeacherChip } from '@/components/schedule/TeacherChips';

interface TeacherSelectionPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTeachers: string[];
  handleTeacherClick: (teacher: TeacherChip) => void;
  teachers: TeacherChip[];
}

const TeacherSelectionPanel: React.FC<TeacherSelectionPanelProps> = ({
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
    <div className="w-full lg:w-[40%] xl:w-[35%] space-y-2">
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
          <SelectTrigger className="h-7 text-xs w-48">
            <SelectValue placeholder="Control position number" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="p-1.5 border rounded-md bg-gray-50 h-[130px]">
        <TeacherChips 
          teachers={filteredTeachers} 
          selectedTeachers={selectedTeachers}
          onTeacherClick={handleTeacherClick}
          selectable
          size="sm"
        />
      </div>
    </div>
  );
};

export default TeacherSelectionPanel;
