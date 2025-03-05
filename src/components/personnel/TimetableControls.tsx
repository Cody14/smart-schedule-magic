
import React from 'react';
import { X, Check, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TimetableGrid from '@/components/schedule/TimetableGrid';

const TimetableControls: React.FC = () => {
  return (
    <Card className="shadow-sm border">
      <CardHeader className="pb-3 border-b">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <X className="h-4 w-4 mr-1 text-red-500" />
              Can not
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <X className="h-4 w-4 mr-1 text-orange-500" />
              Prefer not
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <Check className="h-4 w-4 mr-1 text-blue-500" />
              Prefer work
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <Check className="h-4 w-4 mr-1 text-indigo-600" />
              Must work
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <Trash className="h-4 w-4 mr-1" />
              Remove
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 h-8">
              <Check className="h-4 w-4 mr-1" />
              Select
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <TimetableGrid />
      </CardContent>
    </Card>
  );
};

export default TimetableControls;
