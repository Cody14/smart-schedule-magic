
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const SettingsGrid: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full mb-4">
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="space-y-2">
          <label className="block text-sm">Min. positions pr. day</label>
          <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm">Max. location shifts pr. day</label>
          <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm">Max. positions pr. day</label>
          <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm">Max. working time in period</label>
          <select className="w-full border border-gray-300 rounded p-2 bg-white text-sm">
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center gap-6 mb-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="count-bindings" />
          <label htmlFor="count-bindings" className="text-sm">
            Count bindings without classes
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="time-every-day" />
          <label htmlFor="time-every-day" className="text-sm">
            Time every day
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsGrid;
