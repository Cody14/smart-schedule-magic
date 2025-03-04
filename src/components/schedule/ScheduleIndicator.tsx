
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type IndicatorType = 'prefer-work' | 'must-work' | 'cannot-work' | 'prefer-not';

interface ScheduleIndicatorProps {
  type: IndicatorType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const ScheduleIndicator: React.FC<ScheduleIndicatorProps> = ({
  type,
  size = 'md',
  className,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 text-[0.6rem]',
    md: 'w-6 h-6 text-xs',
    lg: 'w-8 h-8 text-sm',
  };

  const iconSize = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  const renderIcon = () => {
    switch (type) {
      case 'prefer-work':
      case 'must-work':
        return <Check size={iconSize[size]} className="stroke-[3]" />;
      case 'cannot-work':
      case 'prefer-not':
        return <X size={iconSize[size]} className="stroke-[3]" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'schedule-indicator',
        type,
        sizeClasses[size],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {renderIcon()}
    </div>
  );
};

export default ScheduleIndicator;
