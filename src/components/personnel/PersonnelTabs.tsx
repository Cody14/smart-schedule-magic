
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
    <div className="w-full bg-white border-b flex overflow-x-auto">
      {tabItems.map((tab) => (
        <button
          key={tab}
          className={cn(
            "px-6 py-4 text-sm font-medium capitalize border-b-2 whitespace-nowrap",
            activeTab === tab 
              ? "border-blue-600 text-blue-600" 
              : "border-transparent hover:text-blue-600 text-gray-600"
          )}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PersonnelTabs;
