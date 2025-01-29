import {useState} from 'react';
import Button, {ButtonColor} from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Card from "../UI/Card/Card";
import './PostForm.styles.scss'

interface PostFormProps {
    onPostCreate: (title: string, content: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            onPostCreate(title, content);
            setTitle('');
            setContent('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit} className={'PostForm'}>
                <Input
                    value={title}
                    onChange={setTitle}
                />

                <div className={'TextareaWrapper'}>
                    <Textarea
                        value={content}
                        onChange={setContent}
                    />
                </div>
                <Button color={ButtonColor.primary} children={'Create Post'}/>
            </form>
        </Card>
    );
};

export default PostForm;
