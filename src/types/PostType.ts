import {CommentType} from "./CommentType";

export type PostType = {
    id: number;
    title: string;
    createdAt: Date;
    content: string;
    comments: Array<CommentType>;
}
