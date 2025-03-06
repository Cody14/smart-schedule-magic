
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <Card className="shadow-sm border">
      <CardContent className="p-3">
        {/* Main layout container with flexbox */}
        <div className="flex flex-wrap gap-4">
          {/* Left side: Teacher selection area */}
          <TeacherSelectionPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTeachers={selectedTeachers}
            handleTeacherClick={handleTeacherClick}
            teachers={teachers}
          />

          {/* Middle & Right: Settings grid and comment section */}
          <div className="w-full lg:w-[58%] xl:w-[63%]">
            <div className="flex flex-wrap gap-4">
              {/* Settings grid */}
              <SettingsGrid />
              
              {/* Comment section */}
              <CommentSection />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CombinedPersonnelPanel;
