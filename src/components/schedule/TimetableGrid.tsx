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
  
  return (
    <div 
      className={cn(
        "timetable-cell group",
        (preferWork || mustWork || cannotWork || preferNot) && "relative",
        cannotWork && "bg-red-50",
        preferNot && "bg-orange-50",
        preferWork && "bg-blue-50",
        mustWork && "bg-indigo-50"
      )}
      onClick={handleCellClick}
    >
      <TeacherChips 
        teachers={teachers} 
        size="sm"
      />
      
      {(preferWork || mustWork || cannotWork || preferNot) && (
        <div className="absolute bottom-2 right-2 transition-transform transform group-hover:scale-110">
          {preferWork && <ScheduleIndicator type="prefer-work" size="sm" />}
          {mustWork && <ScheduleIndicator type="must-work" size="sm" />}
          {cannotWork && <ScheduleIndicator type="cannot-work" size="sm" />}
          {preferNot && <ScheduleIndicator type="prefer-not" size="sm" />}
        </div>
      )}
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

// Mocked teacher data
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

interface ScheduleData {
  [dayId: string]: {
    [timeSlotId: string]: {
      teachers: TeacherChip[];
      preferWork: boolean;
      mustWork: boolean;
      cannotWork: boolean; 
      preferNot: boolean;
    };
  };
}

const TimetableGrid: React.FC<TimetableGridProps> = ({ className }) => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>(() => {
    // Initialize with sample data
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
    
    // Add some sample indicators
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
    
    // Add sample teachers to some cells
    initialData.mon['4'].teachers = [TEACHERS[0], TEACHERS[1]];
    initialData.tue['3'].teachers = [TEACHERS[2], TEACHERS[3], TEACHERS[4]];
    
    return initialData;
  });
  
  const handleIndicatorChange = (
    day: TimetableDay, 
    timeSlot: TimeSlot, 
    indicator: 'prefer-work' | 'must-work' | 'cannot-work' | 'prefer-not' | null
  ) => {
    setScheduleData(prev => {
      const newData = { ...prev };
      
      // Reset all indicators
      newData[day.id][timeSlot.id] = {
        ...newData[day.id][timeSlot.id],
        preferWork: false,
        mustWork: false,
        cannotWork: false,
        preferNot: false,
      };
      
      // Set the new indicator if not null
      if (indicator) {
        newData[day.id][timeSlot.id][indicator.replace('-', '') as keyof typeof newData[string][string]] = true;
        
        // Show a toast notification
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
    <div className={cn("w-full overflow-auto border rounded-md bg-white animate-scale-in", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="timetable-header w-12 sm:w-16">#</th>
            <th className="timetable-header w-20 sm:w-24">Time</th>
            {DAYS.map(day => (
              <th key={day.id} className="timetable-header">
                {window.innerWidth > 640 ? day.name : day.name.substring(0, 3)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TIME_SLOTS.map((slot, index) => (
            <tr key={slot.id} className={index % 2 === 0 ? "bg-gray-50/30" : ""}>
              <td className="timetable-time text-center">{index + 1}</td>
              <td className="timetable-time">{`${slot.start} - ${slot.end}`}</td>
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
