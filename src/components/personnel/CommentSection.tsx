
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex-1">
      <div className="text-sm font-medium mb-2">Comment</div>
      <Textarea
        placeholder="Add a comment..."
        className="resize-none h-[200px] border border-gray-300"
      />
    </div>
  );
};

export default CommentSection;
