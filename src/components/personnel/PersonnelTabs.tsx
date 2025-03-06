
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonnelTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabItems: string[];
}

const PersonnelTabs: React.FC<PersonnelTabsProps> = ({
  activeTab,
  setActiveTab,
  tabItems,
}) => {
  return (
    <div className="w-full bg-white flex overflow-x-auto border-b">
      {tabItems.map((tab) => (
        <button
          key={tab}
          className={cn(
            "px-8 py-3 text-sm font-medium capitalize whitespace-nowrap flex items-center gap-2",
            activeTab === tab 
              ? "text-indigo-600 border-b-2 border-indigo-600" 
              : "text-gray-700 hover:text-indigo-600"
          )}
          onClick={() => setActiveTab(tab)}
        >
          <div className={cn(
            "w-4 h-4 rounded-full border",
            activeTab === tab ? "bg-indigo-600 border-indigo-600" : "border-gray-400"
          )} />
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PersonnelTabs;
