
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeacherChips, { TeacherChip } from '@/components/schedule/TeacherChips';

interface PersonnelSelectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTeachers: string[];
  handleTeacherClick: (teacher: TeacherChip) => void;
  teachers: TeacherChip[];
}

const PersonnelSelection: React.FC<PersonnelSelectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedTeachers,
  handleTeacherClick,
  teachers,
}) => {
  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    teacher.initials.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="shadow-sm border h-full">
      <CardHeader className="pb-2 pt-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Select Personnel</CardTitle>
          <span className="text-xs text-gray-500">{selectedTeachers.length}/{teachers.length}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-3 pb-2">
        <div className="mb-3 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search personnel..."
            className="pl-8 h-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-1 p-2 border rounded-md bg-gray-50">
          <TeacherChips 
            teachers={filteredTeachers} 
            selectedTeachers={selectedTeachers}
            onTeacherClick={handleTeacherClick}
            selectable
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonnelSelection;
