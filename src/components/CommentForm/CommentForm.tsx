import { forwardRef, useState } from 'react';
import './CommentForm.styles.scss';
import Button, { ButtonColor, ButtonSize } from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';

interface CommentFormProps {
  onCommentCreate: (content: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = forwardRef<HTMLTextAreaElement, CommentFormProps>(
  ({ onCommentCreate }, ref) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (content) {
        onCommentCreate(content);
        setContent('');
      }
    };

    return (
      <form onSubmit={handleSubmit} className={'CommentForm'}>
        <Textarea ref={ref} placeholder="Add a comment" value={content} onChange={setContent} />
        <div>
          <Button size={ButtonSize.medium} color={ButtonColor.primary} children={<i className="bi bi-send"></i>} />
        </div>
      </form>
    );
  },
);

export default CommentForm;
