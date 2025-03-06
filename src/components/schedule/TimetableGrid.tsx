import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ScheduleIndicator from './ScheduleIndicator';
import TeacherChips, { TeacherChip } from './TeacherChips';
import { toast } from '@/components/ui/use-toast';

interface TimeSlot {
  id: string;
  start: string;
  end: string;
}

interface TimetableDay {
  id: string;
  name: string;
}

interface TimetableCellProps {
  day: TimetableDay;
  timeSlot: TimeSlot;
  teachers?: TeacherChip[];
  preferWork?: boolean;
  mustWork?: boolean;
  cannotWork?: boolean;
  preferNot?: boolean;
  onIndicatorChange?: (
    day: TimetableDay, 
    timeSlot: TimeSlot, 
    indicator: 'prefer-work' | 'must-work' | 'cannot-work' | 'prefer-not' | null
  ) => void;
}

const TimetableCell: React.FC<TimetableCellProps> = ({
  day,
  timeSlot,
  teachers = [],
  preferWork = false,
  mustWork = false,
  cannotWork = false,
  preferNot = false,
  onIndicatorChange,
}) => {
  const handleCellClick = () => {
    if (!onIndicatorChange) return;
    
    // Determine which indicator to show next based on current state
    if (cannotWork) {
      onIndicatorChange(day, timeSlot, 'prefer-not');
    } else if (preferNot) {
      onIndicatorChange(day, timeSlot, null);
    } else if (!preferWork && !mustWork) {
      onIndicatorChange(day, timeSlot, 'prefer-work');
    } else if (preferWork) {
      onIndicatorChange(day, timeSlot, 'must-work');
    } else if (mustWork) {
      onIndicatorChange(day, timeSlot, 'cannot-work');
    }
  };
  
  const getIndicatorElement = () => {
    if (preferWork) return <div className="w-6 h-6 flex items-center justify-center rounded-full"><div className="text-indigo-600">●</div></div>;
    if (mustWork) return <div className="w-6 h-6 flex items-center justify-center rounded-full"><div className="text-indigo-800">✓</div></div>;
    if (cannotWork) return <div className="w-6 h-6 flex items-center justify-center rounded-full"><div className="text-red-500">✕</div></div>;
    if (preferNot) return <div className="w-6 h-6 flex items-center justify-center rounded-full"><div className="text-orange-500">⊘</div></div>;
    return null;
  };
  
  return (
    <div 
      className={cn(
        "border p-2 h-16 cursor-pointer",
        cannotWork && "bg-red-50",
        preferNot && "bg-orange-50",
        preferWork && "bg-indigo-50",
        mustWork && "bg-indigo-100"
      )}
      onClick={handleCellClick}
    >
      {getIndicatorElement()}
      <TeacherChips 
        teachers={teachers} 
        size="sm"
      />
    </div>
  );
};

interface TimetableGridProps {
  className?: string;
}

const DAYS: TimetableDay[] = [
  { id: 'mon', name: 'Monday' },
  { id: 'tue', name: 'Tuesday' },
  { id: 'wed', name: 'Wednesday' },
  { id: 'thu', name: 'Thursday' },
  { id: 'fri', name: 'Friday' },
];

const TIME_SLOTS: TimeSlot[] = [
  { id: '1', start: '8:00', end: '8:45' },
  { id: '2', start: '9:00', end: '9:45' },
  { id: '3', start: '10:00', end: '10:45' },
  { id: '4', start: '11:00', end: '11:45' },
  { id: '5', start: '12:30', end: '13:15' },
  { id: '6', start: '13:15', end: '14:00' },
  { id: '7', start: '14:15', end: '15:00' },
  { id: '8', start: '15:00', end: '15:45' },
];

const TEACHERS: TeacherChip[] = [
  { id: 'bc', initials: 'BC', name: 'Bob Chen' },
  { id: 'cf', initials: 'CF', name: 'Catherine Fox' },
  { id: 'em', initials: 'EM', name: 'Eric Miller' },
  { id: 'hu', initials: 'HU', name: 'Helen Underwood' },
  { id: 'jm', initials: 'JM', name: 'James Mitchell' },
  { id: 'lc', initials: 'LC', name: 'Linda Campbell' },
  { id: 'lp', initials: 'LP', name: 'Laura Peters' },
  { id: 'bd', initials: 'BD', name: 'Brian Davis' },
  { id: 'eg', initials: 'EG', name: 'Emma Green' },
  { id: 'fc', initials: 'FC', name: 'Frank Clark' },
  { id: 'je', initials: 'JE', name: 'Jessica Evans' },
  { id: 'kp', initials: 'KP', name: 'Kevin Phillips' },
];

interface CellData {
  teachers: TeacherChip[];
  preferWork: boolean;
  mustWork: boolean;
  cannotWork: boolean; 
  preferNot: boolean;
}

interface ScheduleData {
  [dayId: string]: {
    [timeSlotId: string]: CellData;
  };
}

const TimetableGrid: React.FC<TimetableGridProps> = ({ className }) => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>(() => {
    const initialData: ScheduleData = {};
    
    DAYS.forEach(day => {
      initialData[day.id] = {};
      TIME_SLOTS.forEach(slot => {
        initialData[day.id][slot.id] = {
          teachers: [],
          preferWork: false,
          mustWork: false,
          cannotWork: false,
          preferNot: false,
        };
      });
    });
    
    initialData.mon['4'].preferWork = true;
    initialData.mon['5'].preferWork = true;
    initialData.mon['6'].preferWork = true;
    initialData.mon['7'].cannotWork = true;
    initialData.mon['8'].cannotWork = true;
    
    initialData.thu['4'].preferNot = true;
    initialData.thu['5'].preferNot = true;
    initialData.thu['6'].preferNot = true;
    initialData.thu['7'].mustWork = true;
    initialData.thu['8'].mustWork = true;
    
    initialData.wed['3'].teachers = [TEACHERS[2], TEACHERS[3], TEACHERS[4]];
    initialData.tue['4'].teachers = [TEACHERS[0], TEACHERS[1]];
    
    return initialData;
  });
  
  const handleIndicatorChange = (
    day: TimetableDay, 
    timeSlot: TimeSlot, 
    indicator: 'prefer-work' | 'must-work' | 'cannot-work' | 'prefer-not' | null
  ) => {
    setScheduleData(prev => {
      const newData = { ...prev };
      
      newData[day.id][timeSlot.id] = {
        ...newData[day.id][timeSlot.id],
        preferWork: false,
        mustWork: false,
        cannotWork: false,
        preferNot: false,
      };
      
      if (indicator) {
        switch(indicator) {
          case 'prefer-work':
            newData[day.id][timeSlot.id].preferWork = true;
            break;
          case 'must-work':
            newData[day.id][timeSlot.id].mustWork = true;
            break;
          case 'cannot-work':
            newData[day.id][timeSlot.id].cannotWork = true;
            break;
          case 'prefer-not':
            newData[day.id][timeSlot.id].preferNot = true;
            break;
        }
        
        const indicatorLabels = {
          'prefer-work': 'Prefer work',
          'must-work': 'Must work',
          'cannot-work': 'Cannot work',
          'prefer-not': 'Prefer not'
        };
        
        toast({
          title: `Schedule updated`,
          description: `${day.name}, ${timeSlot.start}-${timeSlot.end}: ${indicatorLabels[indicator]}`,
          duration: 2000,
        });
      }
      
      return newData;
    });
  };
  
  return (
    <div className={cn("w-full overflow-auto border rounded-md bg-white", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border p-2 text-left font-medium w-10">#</th>
            <th className="border p-2 text-left font-medium w-32">Time</th>
            {DAYS.map(day => (
              <th key={day.id} className="border p-2 text-left font-medium">
                {day.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TIME_SLOTS.map((slot, index) => (
            <tr key={slot.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{`${slot.start} - ${slot.end}`}</td>
              {DAYS.map(day => (
                <td key={`${day.id}-${slot.id}`} className="p-0">
                  <TimetableCell 
                    day={day}
                    timeSlot={slot}
                    teachers={scheduleData[day.id][slot.id].teachers}
                    preferWork={scheduleData[day.id][slot.id].preferWork}
                    mustWork={scheduleData[day.id][slot.id].mustWork}
                    cannotWork={scheduleData[day.id][slot.id].cannotWork}
                    preferNot={scheduleData[day.id][slot.id].preferNot}
                    onIndicatorChange={handleIndicatorChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableGrid;
