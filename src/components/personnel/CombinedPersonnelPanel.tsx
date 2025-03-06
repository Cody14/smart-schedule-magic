
import React from 'react';
import { TeacherChip } from '@/components/schedule/TeacherChips';
import TeacherSelectionPanel from './TeacherSelectionPanel';
import SettingsGrid from './SettingsGrid';
import CommentSection from './CommentSection';

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
  return (
    <div className="p-5 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left side: Teacher selection area */}
        <TeacherSelectionPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTeachers={selectedTeachers}
          handleTeacherClick={handleTeacherClick}
          teachers={teachers}
        />

        {/* Settings grid */}
        <SettingsGrid />
          
        {/* Comment section */}
        <CommentSection />
      </div>
    </div>
  );
};

export default CombinedPersonnelPanel;
