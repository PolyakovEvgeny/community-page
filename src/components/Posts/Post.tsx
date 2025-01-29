import { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../Comments/CommentList';
import './Post.styles.scss';
import Card from '../UI/Card/Card';
import Button, { ButtonColor, ButtonSize } from '../UI/Button/Button';
import { FormatDate } from '../../utils/helpers/FormatDate';
import { PostType } from '../../types/PostType';

interface PostProps {
  post: PostType;
  addComment: (postId: number, parentId: number | null, content: string) => void;
}

const Post: React.FC<PostProps> = ({ post, addComment }) => {
  const [showAllComments, setShowAllComments] = useState(false);

  const contentParagraphs = post.content.split('\n');

  const handleCommentCreate = (content: string) => {
    addComment(post.id, null, content);
    setShowAllComments(true);
  };

  const toggleCommentsVisibility = () => {
    setShowAllComments(!showAllComments);
  };

  const visibleComments = showAllComments ? post.comments : post.comments.slice(0, 1);

  return (
    <Card>
      <div className={'TitleBlock'}>
        <h2>{post.title}</h2>
        <span className={'PostDate'}>{FormatDate(post.createdAt || new Date())}</span>
      </div>

      {contentParagraphs.map((line, index) => (
        <p key={index}>{line}</p>
      ))}

      <div className={'Comments'}>
        <CommentList comments={visibleComments} addComment={addComment} postId={post.id} />
      </div>

      {post.comments.length > 1 && (
        <div className={'ShowCommentsButtonBlock'}>
          <Button size={ButtonSize.small} color={ButtonColor.primary} onClick={toggleCommentsVisibility}>
            <i className={`bi ${showAllComments ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </Button>
        </div>
      )}

      <CommentForm onCommentCreate={handleCommentCreate} />
    </Card>
  );
};

export default Post;
