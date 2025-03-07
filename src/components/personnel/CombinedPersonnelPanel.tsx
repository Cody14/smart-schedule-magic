
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
    <div className="p-4 pb-0 bg-gray-100">
      {/* Top row with 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
        {/* Column 1: Teacher selection area */}
        <div className="lg:col-span-4">
          <TeacherSelectionPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTeachers={selectedTeachers}
            handleTeacherClick={handleTeacherClick}
            teachers={teachers}
          />
        </div>

        {/* Column 2: Control position settings */}
        <div className="lg:col-span-4">
          <div className="bg-gray-50 p-3 rounded-lg w-full h-full">
            <div className="space-y-2">
              <div className="space-y-1">
                <label className="block text-xs font-medium">Control position number</label>
                <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
                  <option>Control position number</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-medium">Max. gap hours pr. week</label>
                <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
                  <option>3</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-medium">Max. consecutive gap hours</label>
                <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
                  <option>1</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-medium">Min. consecutive gap hours</label>
                <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
                  <option>1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
          
        {/* Column 3: Comment section */}
        <div className="lg:col-span-4">
          <CommentSection />
        </div>
      </div>

      {/* Settings Grid below, full width */}
      <div className="lg:col-span-12">
        <SettingsGrid />
      </div>
    </div>
  );
};

export default CombinedPersonnelPanel;
