
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <Card className="shadow-sm border h-full">
      <CardHeader className="pb-2 pt-3 border-b">
        <CardTitle className="text-base font-medium">Comment</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 pb-2">
        <Textarea
          placeholder="Add a comment..."
          className="resize-none h-[106px]"
          rows={3}
        />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
