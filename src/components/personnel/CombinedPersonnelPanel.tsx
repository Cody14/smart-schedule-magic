
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
      {/* New layout with 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Column 1: Teacher selection area and settings */}
        <div className="lg:col-span-7">
          <TeacherSelectionPanel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTeachers={selectedTeachers}
            handleTeacherClick={handleTeacherClick}
            teachers={teachers}
          />
          
          <SettingsGrid />
        </div>

        {/* Column 2: Additional settings */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 p-4 rounded-lg w-full">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Max. gap hours pr. week</label>
                <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm">Max. consecutive gap hours</label>
                <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm">Min. consecutive gap hours</label>
                <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
          
        {/* Column 3: Comment section */}
        <div className="lg:col-span-3">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default CombinedPersonnelPanel;
