
import React from 'react';
import { Search, X, CheckCheck, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
    <div className="bg-gray-50 p-4 rounded-lg flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">Select Personnel</div>
        <div className="text-sm text-gray-500">{selectedTeachers.length}/{teachers.length}</div>
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="BC CF EM HU +23"
            className="pl-2 pr-8 py-1 h-9 border border-gray-300 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="text-gray-500 hover:text-gray-700"><X size={16} /></button>
            <button className="text-gray-500 hover:text-gray-700"><CheckCheck size={16} /></button>
            <button className="text-gray-500 hover:text-gray-700 bg-green-100 p-1 rounded"><Edit size={16} /></button>
          </div>
        </div>
        <Select defaultValue="option-1">
          <SelectTrigger className="h-9 text-sm w-48 border border-gray-300">
            <SelectValue placeholder="Control position number" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-1">Control position number</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex flex-wrap gap-1">
        {selectedTeachers.map((teacherId) => {
          const teacher = teachers.find(t => t.id === teacherId);
          if (!teacher) return null;
          
          return (
            <div key={teacher.id} className="bg-green-100 px-2 py-1 rounded flex items-center gap-1 text-sm">
              {teacher.initials}
              <X size={14} className="text-gray-600 cursor-pointer" onClick={() => handleTeacherClick(teacher)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherSelectionPanel;
