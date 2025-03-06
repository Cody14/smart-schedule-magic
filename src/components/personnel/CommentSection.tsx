
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CommentSection: React.FC = () => {
  return (
    <div className="w-full lg:w-[35%]">
      <Label className="text-xs font-medium mb-1 inline-block">Comment</Label>
      <Textarea
        placeholder="Add a comment..."
        className="resize-none h-[130px] text-xs"
        rows={4}
      />
    </div>
  );
};

export default CommentSection;
