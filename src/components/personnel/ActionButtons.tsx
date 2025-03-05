
import React from 'react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onSave: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSave }) => {
  return (
    <div className="mt-3 flex justify-end space-x-2">
      <Button variant="outline" size="sm">Cancel</Button>
      <Button variant="outline" size="sm" onClick={onSave}>Save</Button>
      <Button variant="outline" size="sm" className="text-red-600">Delete</Button>
      <Button size="sm">Add</Button>
    </div>
  );
};

export default ActionButtons;
