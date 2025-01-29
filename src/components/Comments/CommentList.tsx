import Comment from './Comment/Comment';
import './CommentList.styles.scss';
import { CommentType } from '../../types/CommentType';

interface CommentListProps {
  comments: Array<CommentType>;
  addComment: (postId: number, parentId: number | null, content: string) => void;
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ comments, addComment, postId }) => {
  return (
    <div className={'CommentList'}>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} addComment={addComment} postId={postId} />
      ))}
    </div>
  );
};

export default CommentList;
