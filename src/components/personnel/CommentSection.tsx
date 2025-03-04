
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <Card className="shadow-sm border">
      <CardHeader className="pb-3 border-b">
        <CardTitle className="text-base font-medium">Comment</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <Textarea
          placeholder="Add a comment..."
          className="resize-none"
          rows={4}
        />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
