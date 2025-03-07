
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg w-full h-full">
      <div className="text-xs font-medium mb-1">Comment</div>
      <Textarea
        placeholder="Add a comment..."
        className="resize-none h-[7.85rem] border border-gray-300 text-xs p-2 bg-white"
      />
    </div>
  );
};

export default CommentSection;
