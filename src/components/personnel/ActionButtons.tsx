
import React from 'react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onSave: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSave }) => {
  return (
    <div className="flex justify-end space-x-1.5">
      <Button variant="outline" size="sm" className="text-xs h-6 px-2.5">Cancel</Button>
      <Button variant="outline" size="sm" className="text-xs h-6 px-2.5" onClick={onSave}>Save</Button>
      <Button variant="outline" size="sm" className="text-xs h-6 px-2.5 text-red-600">Delete</Button>
      <Button size="sm" className="text-xs h-6 px-2.5">Add</Button>
    </div>
  );
};

export default ActionButtons;
