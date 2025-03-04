
import React from 'react';
import { Bell, MessageSquare, Search, ChevronDown } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  currentPath?: string;
}

const Header = ({ className, currentPath = '' }: HeaderProps) => {
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  return (
    <header className={cn("h-16 border-b bg-white px-6 flex items-center justify-between", className)}>
      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search" 
            className="pl-9 h-9 rounded-md border border-gray-200 focus:border-blue-500 transition-all duration-200"
          />
        </div>
        
        {pathSegments.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Resources</span>
            <ChevronDown className="w-4 h-4" />
            {pathSegments.map((segment, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronDown className="w-4 h-4" />}
                <span className={cn(
                  "capitalize",
                  index === pathSegments.length - 1 ? "text-gray-900 font-medium" : ""
                )}>
                  {segment}
                </span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
        >
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </Button>
        
        <div className="flex items-center gap-2 cursor-pointer border-l pl-4 ml-2">
          <Avatar className="w-8 h-8 bg-blue-600">
            <span className="text-xs font-medium">HH</span>
          </Avatar>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Hannie Hansen</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
