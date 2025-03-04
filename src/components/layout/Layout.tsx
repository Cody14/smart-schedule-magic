
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header currentPath={location.pathname} />
      <main className={cn("flex-1 overflow-auto p-4 md:p-6 animate-fade-in", className)}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
