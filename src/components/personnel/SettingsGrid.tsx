
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const SettingsGrid: React.FC = () => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg w-full mb-3">
      <div className="grid grid-cols-12 gap-3">
        {/* Blue marked fields - left side */}
        <div className="space-y-1 col-span-3">
          <label className="block text-xs font-medium">Min. positions pr. day</label>
          <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
            <option>2</option>
          </select>
        </div>
        
        <div className="space-y-1 col-span-3">
          <label className="block text-xs font-medium">Max. location shifts pr. day</label>
          <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
            <option>2</option>
          </select>
        </div>
        
        {/* Green marked fields - right side */}
        <div className="space-y-1 col-span-3">
          <label className="block text-xs font-medium">Max. positions pr. day</label>
          <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
            <option>5</option>
          </select>
        </div>
        
        <div className="space-y-1 col-span-3">
          <label className="block text-xs font-medium">Max. working time in period</label>
          <select className="w-full border border-gray-300 rounded p-1 bg-white text-xs h-7">
            <option>6</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        {/* Orange marked field - bottom left */}
        <div className="flex items-center space-x-2">
          <Checkbox id="count-bindings" className="h-3 w-3" />
          <Label htmlFor="count-bindings" className="text-xs">
            Count bindings without classes
          </Label>
        </div>
        
        {/* Teal marked field - bottom right */}
        <div className="flex items-center space-x-2 ml-auto">
          <Checkbox id="time-every-day" className="h-3 w-3" />
          <Label htmlFor="time-every-day" className="text-xs">
            Time every day
          </Label>
        </div>
      </div>
    </div>
  );
};

export default SettingsGrid;
