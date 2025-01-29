export type CommentType = {
    id: number;
    author: string;
    content: string;
    replies: Array<CommentType>;
}
