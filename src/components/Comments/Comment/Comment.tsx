import { useEffect, useRef, useState } from 'react';
import CommentForm from '../../CommentForm/CommentForm';
import CommentList from '../CommentList';
import './Сomment.styles.scss';
import Button, { ButtonColor, ButtonSize } from '../../UI/Button/Button';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { CommentType } from '../../../types/CommentType';

interface CommentProps {
  comment: CommentType;
  addComment: (postId: number, parentId: number | null, content: string) => void;
  postId: number;
}

const Comment: React.FC<CommentProps> = ({ comment, addComment, postId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleReplyCreate = (content: string) => {
    addComment(postId, comment.id, content);
    setShowReplyForm(false);
  };

  const currentUser = useCurrentUser();

  useEffect(() => {
    if (showReplyForm && ref.current) {
      (ref.current as HTMLTextAreaElement).focus();
    }
  }, [ref.current, showReplyForm]);

  return (
    <div className={'Comment'}>
      <div className={'CommentWrapper'}>
        <p>
          <strong>{comment.author || currentUser.name}:</strong> {comment.content}
        </p>
        <div>
          <Button
            onClick={() => setShowReplyForm(!showReplyForm)}
            size={ButtonSize.small}
            color={ButtonColor.secondary}
            children={showReplyForm ? 'Close Reply Form' : <i className="bi bi-reply-fill"></i>}
          />
        </div>
      </div>

      {comment.replies.length > 0 && (
        <div className={'Replies'}>
          <CommentList comments={comment.replies} addComment={addComment} postId={postId} />
        </div>
      )}

      {showReplyForm && <CommentForm onCommentCreate={handleReplyCreate} ref={ref} />}
    </div>
  );
};

export default Comment;
