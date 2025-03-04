
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, BookOpen, Home, School, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, to, className }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={cn(
        "bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",
        className
      )}
      onClick={() => navigate(to)}
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            AI Timetable Management
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Effortlessly create and manage school timetables with our intelligent scheduling system.
            Optimize teacher time, classroom resources, and student experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 border border-transparent"
              onClick={() => navigate('/personnel')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Streamline Your School Schedule
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive AI-powered system helps you manage all aspects of educational scheduling,
            from teacher assignments to classroom allocation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          <FeatureCard 
            icon={<Users className="w-10 h-10" />}
            title="Personnel Management"
            description="Efficiently manage teacher profiles, availability, and scheduling preferences."
            to="/personnel"
          />
          <FeatureCard 
            icon={<School className="w-10 h-10" />}
            title="Class Management"
            description="Organize and maintain class information, schedules, and resource requirements."
            to="/classes"
          />
          <FeatureCard 
            icon={<Calendar className="w-10 h-10" />}
            title="Period Management"
            description="Define class time slots and periods to create consistent scheduling structures."
            to="/periods"
          />
          <FeatureCard 
            icon={<BookOpen className="w-10 h-10" />}
            title="Subject Management"
            description="Track subjects, teachers qualified to teach them, and scheduling constraints."
            to="/subjects"
          />
          <FeatureCard 
            icon={<Home className="w-10 h-10" />}
            title="Room Management"
            description="Allocate physical spaces optimally based on class requirements and availability."
            to="/rooms"
          />
          <FeatureCard 
            icon={<Settings className="w-10 h-10" />}
            title="Rules & Settings"
            description="Create custom scheduling rules and constraints to meet your institution's needs."
            to="/rules"
          />
        </div>
        
        <div className="mt-16 bg-white border rounded-xl p-8 shadow-sm animate-scale-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI-Powered Scheduling
              </h3>
              <p className="text-gray-600 mb-6">
                Our advanced scheduling algorithms take into account teacher preferences, room availability,
                subject requirements, and educational best practices to generate optimized timetables.
              </p>
              <ul className="space-y-3">
                {[
                  "Respects teacher availability and preferences",
                  "Balances teacher workloads",
                  "Optimizes room utilization",
                  "Minimizes student scheduling conflicts",
                  "Supports complex educational constraints"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8 md:border-l">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  Ready to optimize your school schedule?
                </h4>
                <p className="text-gray-600 mb-6">
                  Get started with AI Timetable and transform your scheduling process.
                  Our system adapts to your school's unique requirements.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => navigate('/personnel')}
                >
                  Start Creating Timetables
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/328888a8-d089-4047-9a6e-3bfdf7d41acd.png" 
                alt="IST Logo" 
                className="w-12 h-auto mr-3 invert opacity-80" 
              />
              <span className="text-xl font-semibold">AI Timetable</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AI Timetable. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
