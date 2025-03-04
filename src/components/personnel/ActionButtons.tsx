
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ActionButtonsProps {
  onSave: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSave }) => {
  return (
    <div className="mt-4 flex justify-end space-x-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="outline" onClick={onSave}>Save</Button>
      <Button variant="outline" className="text-red-600">Delete</Button>
      <Button>Add</Button>
    </div>
  );
};

export default ActionButtons;
