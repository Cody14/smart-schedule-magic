
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SettingsGrid: React.FC = () => {
  return (
    <div className="w-full lg:w-[62%] space-y-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1">
        <div>
          <Label htmlFor="min-positions" className="text-xs font-medium mb-0.5 inline-block">
            Min. positions pr. day
          </Label>
          <Select defaultValue="2">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="max-positions" className="text-xs font-medium mb-0.5 inline-block">
            Max. positions pr. day
          </Label>
          <Select defaultValue="6">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[3, 4, 5, 6, 7, 8].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="max-location-shifts" className="text-xs font-medium mb-0.5 inline-block">
            Max. location shifts pr. day
          </Label>
          <Select defaultValue="3">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="max-working-time" className="text-xs font-medium mb-0.5 inline-block">
            Max. working time in period
          </Label>
          <Select defaultValue="8">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[6, 7, 8, 9, 10].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="max-gap-hours" className="text-xs font-medium mb-0.5 inline-block">
            Max. gap hours pr. week
          </Label>
          <Select defaultValue="4">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[2, 3, 4, 5, 6].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="min-consecutive-gap" className="text-xs font-medium mb-0.5 inline-block">
            Min. consecutive gap hours
          </Label>
          <Select defaultValue="2">
            <SelectTrigger className="h-7 text-xs">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map(i => (
                <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="count-bindings" className="h-3.5 w-3.5" />
          <Label htmlFor="count-bindings" className="text-xs">
            Count bindings without classes
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="time-every-day" className="h-3.5 w-3.5" />
          <Label htmlFor="time-every-day" className="text-xs">
            Time every day
          </Label>
        </div>
      </div>
    </div>
  );
};

export default SettingsGrid;
