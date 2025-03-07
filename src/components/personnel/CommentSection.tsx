
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full h-full">
      <div className="text-sm font-medium mb-1">Comment</div>
      <Textarea
        placeholder="Add a comment..."
        className="resize-none h-[165px] border border-gray-300 text-sm"
      />
    </div>
  );
};

export default CommentSection;
