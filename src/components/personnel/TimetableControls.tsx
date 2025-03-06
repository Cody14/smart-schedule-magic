
import React from 'react';
import { X, Check, Trash } from 'lucide-react';
import TimetableGrid from '@/components/schedule/TimetableGrid';

const TimetableControls: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mt-4">
      <div className="p-2 flex flex-wrap justify-between border-b">
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <X className="h-4 w-4 text-red-500" />
            <span>Can not</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <X className="h-4 w-4 text-orange-500" />
            <span>Prefer not</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <Check className="h-4 w-4 text-indigo-600" />
            <span>Prefer work</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <Check className="h-4 w-4 text-indigo-800" />
            <span>Must work</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 rounded text-sm hover:bg-gray-100">
            <span>remove</span>
          </button>
          <button className="px-2 py-1 rounded text-sm hover:bg-gray-100">
            <span>Select</span>
          </button>
        </div>
      </div>

      <div className="p-0">
        <TimetableGrid />
      </div>
    </div>
  );
};

export default TimetableControls;
