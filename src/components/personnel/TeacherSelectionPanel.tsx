
import React from 'react';
import { X, CheckCheck, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TeacherChip } from '@/components/schedule/TeacherChips';

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

  const selectedTeacherCount = selectedTeachers.length;
  const totalTeacherCount = teachers.length;

  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-medium">Select Personnel</div>
        <div className="text-sm text-gray-500">{selectedTeacherCount}/{totalTeacherCount}</div>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 border border-gray-300 rounded bg-white h-10">
          {selectedTeachers.map((teacherId) => {
            const teacher = teachers.find(t => t.id === teacherId);
            if (!teacher) return null;
            
            return (
              <div key={teacher.id} className="bg-green-100 px-1.5 py-0.5 rounded flex items-center gap-1 text-xs">
                {teacher.initials}
                <X size={12} className="text-gray-600 cursor-pointer" onClick={() => handleTeacherClick(teacher)} />
              </div>
            );
          })}
          {selectedTeachers.length > 0 && <span className="text-gray-500 text-xs">+{totalTeacherCount - selectedTeacherCount}</span>}
          
          <div className="flex-1 flex items-center gap-1 ml-1">
            <Input
              type="text"
              placeholder="BC CF EM HU +23"
              className="border-0 shadow-none focus-visible:ring-0 h-6 pl-0 flex-1 text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-1">
              <button className="text-gray-500 hover:text-gray-700"><X size={14} /></button>
              <button className="text-gray-500 hover:text-gray-700"><CheckCheck size={14} /></button>
              <button className="text-gray-500 hover:text-gray-700 bg-green-100 p-0.5 rounded"><Edit size={14} /></button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-1">
          <Select defaultValue="option-1">
            <SelectTrigger className="h-8 text-xs border border-gray-300 flex-1">
              <SelectValue placeholder="Control position number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option-1">Control position number</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TeacherSelectionPanel;
