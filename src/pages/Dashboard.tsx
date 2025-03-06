
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BookOpen, Calendar, Clock, School, User, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data for the charts
const teacherData = [
  { name: 'Mon', teachers: 12 },
  { name: 'Tue', teachers: 15 },
  { name: 'Wed', teachers: 18 },
  { name: 'Thu', teachers: 14 },
  { name: 'Fri', teachers: 10 },
];

const roomData = [
  { name: 'Mon', rooms: 22 },
  { name: 'Tue', rooms: 25 },
  { name: 'Wed', rooms: 28 },
  { name: 'Thu', rooms: 24 },
  { name: 'Fri', rooms: 20 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Summary tiles data
  const summaryTiles = [
    { title: 'Teachers', count: 35, icon: <Users className="h-6 w-6" />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Classes', count: 42, icon: <School className="h-6 w-6" />, color: 'bg-purple-100 text-purple-600' },
    { title: 'Subjects', count: 18, icon: <BookOpen className="h-6 w-6" />, color: 'bg-green-100 text-green-600' },
    { title: 'Rooms', count: 24, icon: <Calendar className="h-6 w-6" />, color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <Layout>
      <div className="p-4 space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back to your AI Timetable dashboard</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => navigate('/personnel')}
            >
              <Users className="h-4 w-4" /> 
              Manage Personnel
            </Button>
            <Button className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Generate Timetable
            </Button>
          </div>
        </div>

        {/* Summary tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryTiles.map((tile, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-600">{tile.title}</p>
                  <p className="text-2xl font-bold">{tile.count}</p>
                </div>
                <div className={`p-3 rounded-full ${tile.color}`}>
                  {tile.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Utilization Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Teacher Utilization</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teacherData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="teachers" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Room Utilization</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roomData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rooms" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'Anna Smith', action: 'updated the timetable for Math teachers', time: '2 hours ago', icon: <Clock className="h-4 w-4 text-gray-500" /> },
                { user: 'John Peterson', action: 'added 3 new teachers to Science department', time: '3 hours ago', icon: <User className="h-4 w-4 text-gray-500" /> },
                { user: 'Sarah Miller', action: 'modified room allocation for Monday', time: '5 hours ago', icon: <Calendar className="h-4 w-4 text-gray-500" /> },
                { user: 'David Wilson', action: 'generated a new timetable schedule', time: 'Yesterday', icon: <Calendar className="h-4 w-4 text-gray-500" /> },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="bg-gray-100 p-2 rounded-full">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      <span className="font-bold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
