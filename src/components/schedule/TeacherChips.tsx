
import React from 'react';
import { cn } from '@/lib/utils';

export interface TeacherChip {
  id: string;
  initials: string;
  name: string;
  color?: string;
}

interface TeacherChipsProps {
  teachers: TeacherChip[];
  selectedTeachers?: string[];
  onTeacherClick?: (teacher: TeacherChip) => void;
  onTeacherRemove?: (teacherId: string) => void;
  className?: string;
  selectable?: boolean;
  removable?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const TeacherChips: React.FC<TeacherChipsProps> = ({
  teachers,
  selectedTeachers = [],
  onTeacherClick,
  onTeacherRemove,
  className,
  selectable = false,
  removable = false,
  size = 'md',
}) => {
  const isSelected = (id: string) => selectedTeachers.includes(id);

  const getSize = () => {
    switch (size) {
      case 'sm': return 'text-xs px-1.5 py-0.5 m-0.5';
      case 'lg': return 'text-sm px-2.5 py-1.5 m-1';
      default: return 'text-xs px-2 py-1 m-0.5';
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          className={cn(
            "inline-flex items-center justify-center rounded-md text-xs font-medium px-2 py-1 m-0.5 transition-all duration-200",
            getSize(),
            isSelected(teacher.id) 
              ? "bg-blue-100 text-blue-800 border border-blue-300" 
              : "bg-gray-100 text-gray-800 border border-gray-200",
            selectable && "cursor-pointer hover:bg-blue-50 hover:border-blue-300",
            !selectable && "cursor-default",
          )}
          onClick={() => selectable && onTeacherClick && onTeacherClick(teacher)}
        >
          {teacher.initials}
          {removable && (
            <button
              className="ml-1.5 text-gray-500 hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                onTeacherRemove && onTeacherRemove(teacher.id);
              }}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeacherChips;
