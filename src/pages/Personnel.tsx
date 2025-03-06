
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { TeacherChip } from '@/components/schedule/TeacherChips';
import { toast } from '@/components/ui/use-toast';

// Import our components
import PersonnelTabs from '@/components/personnel/PersonnelTabs';
import CombinedPersonnelPanel from '@/components/personnel/CombinedPersonnelPanel';
import TimetableControls from '@/components/personnel/TimetableControls';
import ActionButtons from '@/components/personnel/ActionButtons';
import TabContent from '@/components/personnel/TabContent';
import { TEACHER_CHIPS, TAB_ITEMS } from '@/components/personnel/PersonnelData';

const Personnel = () => {
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>(['bc', 'cf', 'em', 'hu']);
  const [activeTab, setActiveTab] = useState<string>('personnel');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleTeacherClick = (teacher: TeacherChip) => {
    setSelectedTeachers(prev => 
      prev.includes(teacher.id) 
        ? prev.filter(id => id !== teacher.id) 
        : [...prev, teacher.id]
    );
    toast({
      title: selectedTeachers.includes(teacher.id) ? "Teacher removed" : "Teacher added",
      description: `${teacher.name} has been ${selectedTeachers.includes(teacher.id) ? "removed from" : "added to"} your selection.`,
      duration: 2000,
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your changes have been successfully saved.",
      duration: 2000,
    });
  };
  
  return (
    <Layout>
      <div className="relative w-full">
        <PersonnelTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabItems={TAB_ITEMS}
        />
        
        <div className="bg-gray-100">
          {activeTab === 'personnel' ? (
            <div className="animate-fade-in">
              {/* Combined personnel panel */}
              <CombinedPersonnelPanel
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedTeachers={selectedTeachers}
                handleTeacherClick={handleTeacherClick}
                teachers={TEACHER_CHIPS}
              />
              
              {/* Timetable section */}
              <div className="p-5 pt-0">
                <TimetableControls />
              </div>
              
              <div className="p-5 pt-0">
                <ActionButtons onSave={handleSave} />
              </div>
            </div>
          ) : (
            <TabContent tabName={activeTab} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Personnel;
