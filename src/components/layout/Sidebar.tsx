
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, Settings, Calendar, Users, BookOpen, Home, LayoutGrid } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  onClick?: () => void;
  depth?: number;
}

const NavItem = ({ 
  icon, 
  label, 
  href, 
  isActive = false,
  hasSubmenu = false,
  isSubmenuOpen = false,
  onClick,
  depth = 0
}: NavItemProps) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
        depth > 0 && "pl-10"
      )}
    >
      <span className="flex-shrink-0 w-5 h-5">
        {icon}
      </span>
      <span className="flex-grow">{label}</span>
      {hasSubmenu && (
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isSubmenuOpen && "transform rotate-180"
          )} 
        />
      )}
    </Link>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>("menu-1");

  const toggleSubmenu = (id: string) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <div className={cn("w-64 bg-sidebar h-screen flex flex-col border-r", className)}>
      <div className="p-4">
        <div className="flex items-center mb-8">
          <img 
            src="/lovable-uploads/328888a8-d089-4047-9a6e-3bfdf7d41acd.png" 
            alt="IST Logo" 
            className="w-16 h-auto" 
          />
        </div>
        
        <nav className="space-y-1 animate-fade-in">
          <NavItem 
            icon={<Home className="w-5 h-5" />} 
            label="Dashboard" 
            href="/" 
            isActive={location.pathname === '/'}
          />
          
          <div className="pt-2">
            <NavItem 
              icon={<Users className="w-5 h-5" />} 
              label="Menu header" 
              href="#" 
              hasSubmenu 
              isSubmenuOpen={activeSubmenu === "menu-1"}
              onClick={(e) => { 
                e.preventDefault(); 
                toggleSubmenu("menu-1"); 
              }}
            />
            
            {activeSubmenu === "menu-1" && (
              <div className="mt-1 ml-2 space-y-1 animate-slide-in">
                <NavItem 
                  icon={<div className="w-2 h-2 rounded-full bg-sidebar-foreground opacity-70" />} 
                  label="Menu item" 
                  href="/menu-item-1" 
                  isActive={location.pathname === '/menu-item-1'}
                  depth={1}
                />
                <NavItem 
                  icon={<div className="w-2 h-2 rounded-full bg-sidebar-foreground opacity-70" />} 
                  label="Menu item" 
                  href="/menu-item-2" 
                  isActive={location.pathname === '/menu-item-2'}
                  depth={1}
                />
                <NavItem 
                  icon={<div className="w-2 h-2 rounded-full bg-sidebar-foreground opacity-70" />} 
                  label="Menu item" 
                  href="/menu-item-3" 
                  isActive={location.pathname === '/menu-item-3'}
                  depth={1}
                  hasSubmenu
                  isSubmenuOpen={activeSubmenu === "menu-1-1"}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    e.stopPropagation();
                    toggleSubmenu("menu-1-1"); 
                  }}
                />
                
                {activeSubmenu === "menu-1-1" && (
                  <div className="mt-1 ml-4 space-y-1 animate-slide-in">
                    <NavItem 
                      icon={<div className="w-1.5 h-1.5 rounded-full bg-sidebar-foreground opacity-60" />} 
                      label="Menu item" 
                      href="/menu-item-3-1" 
                      isActive={location.pathname === '/menu-item-3-1'}
                      depth={2}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <span className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase">Resources</span>
            <div className="mt-2 space-y-1">
              <NavItem 
                icon={<Users className="w-5 h-5" />} 
                label="Personnel" 
                href="/personnel" 
                isActive={location.pathname === '/personnel'}
              />
              <NavItem 
                icon={<LayoutGrid className="w-5 h-5" />} 
                label="Classes" 
                href="/classes" 
                isActive={location.pathname === '/classes'}
              />
              <NavItem 
                icon={<Users className="w-5 h-5" />} 
                label="Teams" 
                href="/teams" 
                isActive={location.pathname === '/teams'}
              />
              <NavItem 
                icon={<BookOpen className="w-5 h-5" />} 
                label="Subjects" 
                href="/subjects" 
                isActive={location.pathname === '/subjects'}
              />
              <NavItem 
                icon={<LayoutGrid className="w-5 h-5" />} 
                label="Rooms" 
                href="/rooms" 
                isActive={location.pathname === '/rooms'}
              />
              <NavItem 
                icon={<Settings className="w-5 h-5" />} 
                label="Rules" 
                href="/rules" 
                isActive={location.pathname === '/rules'}
              />
              <NavItem 
                icon={<Calendar className="w-5 h-5" />} 
                label="Periods" 
                href="/periods" 
                isActive={location.pathname === '/periods'}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
