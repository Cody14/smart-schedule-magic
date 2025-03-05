
import React from 'react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onSave: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSave }) => {
  return (
    <div className="mt-2 flex justify-end space-x-2">
      <Button variant="outline" size="sm" className="text-xs h-7">Cancel</Button>
      <Button variant="outline" size="sm" className="text-xs h-7" onClick={onSave}>Save</Button>
      <Button variant="outline" size="sm" className="text-xs h-7 text-red-600">Delete</Button>
      <Button size="sm" className="text-xs h-7">Add</Button>
    </div>
  );
};

export default ActionButtons;
