import {usePosts} from '../hooks/usePosts';
import Post from '../components/Posts/Post';
import PostForm from '../components/PostForm/PostForm';
import './App.scss';
import {useState} from "react";
import Button, {ButtonSize} from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import "bootstrap-icons/font/bootstrap-icons.css";

const App: React.FC = () => {
    const { posts, addPost, addComment } = usePosts();
    const [showPostForm, setShowPostForm] = useState(false);

    const handlePostCreate = (title: string, content: string) => {
        addPost(title, content);
        setShowPostForm(false);
    };

    const sortedPosts = [...posts].reverse();

    return (
        <Container>
            <div className={'App'}>
                <h1>Community Page</h1>
                <div className={'PostFormCard'}>
                    <Button onClick={() => setShowPostForm(!showPostForm)} size={ButtonSize.large} children={showPostForm ? 'Close Post Form' : 'Add New Post'} />
                    {showPostForm && <PostForm onPostCreate={handlePostCreate} />}
                </div>

                <div className={'Posts'}>
                    {sortedPosts.map((post) => (
                        <Post key={post.id} post={post} addComment={addComment} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default App;
