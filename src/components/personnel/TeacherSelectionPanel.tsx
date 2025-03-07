
import React from 'react';
import { X, CheckCheck, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
    <div className="bg-gray-50 p-3 rounded-lg w-full h-full">
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs font-medium">Select Personnel</div>
        <div className="text-xs text-gray-500">{selectedTeacherCount}/{totalTeacherCount}</div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-1 p-1 border border-gray-300 rounded bg-white h-7">
          {selectedTeachers.map((teacherId) => {
            const teacher = teachers.find(t => t.id === teacherId);
            if (!teacher) return null;
            
            return (
              <div key={teacher.id} className="bg-green-100 px-1 py-0.5 rounded flex items-center gap-0.5 text-xs">
                {teacher.initials}
                <X size={10} className="text-gray-600 cursor-pointer" onClick={() => handleTeacherClick(teacher)} />
              </div>
            );
          })}
          {selectedTeachers.length > 0 && <span className="text-gray-500 text-xs">+{totalTeacherCount - selectedTeacherCount}</span>}
          
          <div className="flex-1 flex items-center gap-1">
            <Input
              type="text"
              placeholder="BC CF EM HU +23"
              className="border-0 shadow-none focus-visible:ring-0 h-5 pl-1 flex-1 text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-1">
              <button className="text-gray-500 hover:text-gray-700"><X size={12} /></button>
              <button className="text-gray-500 hover:text-gray-700"><CheckCheck size={12} /></button>
              <button className="text-gray-500 hover:text-gray-700 bg-green-100 p-0.5 rounded"><Edit size={12} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSelectionPanel;
