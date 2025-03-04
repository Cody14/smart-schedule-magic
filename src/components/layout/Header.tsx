
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Menu, MessageSquare, Search, ChevronDown, Home, Users, LayoutGrid, BookOpen, Settings, Calendar } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  className?: string;
  currentPath?: string;
}

const Header = ({ className, currentPath = '' }: HeaderProps) => {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);
  
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Personnel', href: '/personnel' },
    { icon: LayoutGrid, label: 'Classes', href: '/classes' },
    { icon: Users, label: 'Teams', href: '/teams' },
    { icon: BookOpen, label: 'Subjects', href: '/subjects' },
    { icon: LayoutGrid, label: 'Rooms', href: '/rooms' },
    { icon: Settings, label: 'Rules', href: '/rules' },
    { icon: Calendar, label: 'Periods', href: '/periods' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className={cn("h-16 border-b bg-white px-4 lg:px-6 flex items-center justify-between sticky top-0 z-50 shadow-sm", className)}>
      <div className="flex items-center gap-4">
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/328888a8-d089-4047-9a6e-3bfdf7d41acd.png" 
                  alt="IST Logo" 
                  className="w-10 h-auto" 
                />
                <span>AI Timetable</span>
              </SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all",
                        isActive(item.href) 
                          ? "bg-primary/10 text-primary" 
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo on mobile only */}
        <Link to="/" className="flex items-center md:hidden">
          <img 
            src="/lovable-uploads/328888a8-d089-4047-9a6e-3bfdf7d41acd.png" 
            alt="IST Logo" 
            className="w-8 h-auto" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/328888a8-d089-4047-9a6e-3bfdf7d41acd.png" 
              alt="IST Logo" 
              className="w-10 h-auto" 
            />
          </Link>
          
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href) 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Search Bar - Shown based on screen size */}
        <div className={cn(
          "relative transition-all duration-300 ease-in-out",
          searchFocused ? "w-full md:w-80" : "w-full md:w-64"
        )}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search..." 
            className="pl-9 h-9 rounded-md border border-gray-200 focus:border-blue-500 transition-all duration-200 w-full"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative hidden md:flex"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex"
        >
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer md:border-l md:pl-4 md:ml-2">
              <Avatar className="w-8 h-8 bg-primary">
                <span className="text-xs font-medium">HH</span>
              </Avatar>
              <div className="hidden md:flex items-center gap-1">
                <span className="text-sm font-medium">Hannie Hansen</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
