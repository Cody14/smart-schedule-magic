
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TeacherSettingsProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isOpen: boolean) => void;
}

const TeacherSettings: React.FC<TeacherSettingsProps> = ({
  isSettingsOpen,
  setIsSettingsOpen,
}) => {
  return (
    <Card className="shadow-sm border h-full">
      <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <CardHeader className="pb-2 pt-3 border-b">
          <CollapsibleTrigger asChild className="w-full">
            <div className="flex items-center justify-between cursor-pointer">
              <CardTitle className="text-base font-medium">Teacher Settings</CardTitle>
              {isSettingsOpen ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
            </div>
          </CollapsibleTrigger>
        </CardHeader>
        
        <CollapsibleContent>
          <CardContent className="pt-2 pb-2 space-y-2">
            <div>
              <Label htmlFor="control-number" className="text-sm font-medium mb-1 inline-block">
                Control position number
              </Label>
              <Select defaultValue="option-1">
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option-1">Option 1</SelectItem>
                  <SelectItem value="option-2">Option 2</SelectItem>
                  <SelectItem value="option-3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <Label htmlFor="min-positions" className="text-sm font-medium mb-1 inline-block">
                  Min. positions pr. day
                </Label>
                <Select defaultValue="2">
                  <SelectTrigger className="h-8">
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
                <Label htmlFor="max-positions" className="text-sm font-medium mb-1 inline-block">
                  Max. positions pr. day
                </Label>
                <Select defaultValue="6">
                  <SelectTrigger className="h-8">
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
                <Label htmlFor="max-location-shifts" className="text-sm font-medium mb-1 inline-block">
                  Max. location shifts pr. day
                </Label>
                <Select defaultValue="3">
                  <SelectTrigger className="h-8">
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
                <Label htmlFor="max-working-time" className="text-sm font-medium mb-1 inline-block">
                  Max. working time in period
                </Label>
                <Select defaultValue="8">
                  <SelectTrigger className="h-8">
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
                <Label htmlFor="max-gap-hours" className="text-sm font-medium mb-1 inline-block">
                  Max. gap hours pr. week
                </Label>
                <Select defaultValue="4">
                  <SelectTrigger className="h-8">
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
                <Label htmlFor="min-consecutive-gap" className="text-sm font-medium mb-1 inline-block">
                  Min. consecutive gap hours
                </Label>
                <Select defaultValue="2">
                  <SelectTrigger className="h-8">
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
            
            <div className="flex flex-col space-y-1 mt-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="count-bindings" />
                <Label htmlFor="count-bindings" className="text-sm">
                  Count bindings without classes
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="time-every-day" />
                <Label htmlFor="time-every-day" className="text-sm">
                  Time every day
                </Label>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default TeacherSettings;
