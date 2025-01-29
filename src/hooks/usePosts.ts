import { useState } from 'react';
import { mockPosts } from '../data/mockData/postsData.mock';
import { PostType } from '../types/PostType';
import { CommentType } from '../types/CommentType';
import { useCurrentUser } from './useCurrentUser';

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>(mockPosts);

  const addPost = (title: string, content: string) => {
    const newPost: PostType = { id: Date.now(), title, content, comments: [], createdAt: new Date() };
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const currentUser = useCurrentUser();

  const addComment = (postId: number, parentId: number | null, content: string) => {
    const updateComments = (comments: CommentType[]): CommentType[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), content, replies: [], author: currentUser.name }],
          };
        } else {
          return { ...comment, replies: updateComments(comment.replies) };
        }
      });
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: parentId
                ? updateComments(post.comments)
                : [...post.comments, { id: Date.now(), content, replies: [], author: currentUser.name }],
            }
          : post,
      ),
    );
  };

  return { posts, addPost, addComment };
};
