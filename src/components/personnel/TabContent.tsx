
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TabContentProps {
  tabName: string;
}

const TabContent: React.FC<TabContentProps> = ({ tabName }) => {
  return (
    <div className="py-10 text-center text-gray-500 bg-white rounded-md border border-dashed">
      <h3 className="text-lg font-medium capitalize">{tabName} management</h3>
      <p className="mt-2">This feature will be implemented in the next phase.</p>
      <Button className="mt-4">
        <Plus className="w-4 h-4 mr-2" />
        Add {tabName.slice(0, -1)}
      </Button>
    </div>
  );
};

export default TabContent;
