import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();

app.use(bodyParser.json());

type Comment = {
    id: string;
    content: string;
}

type CommentByPostId = {
    [key: string] : Comment[];
}

const commentsByPostId: CommentByPostId = {}

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content});

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments)
})

app.listen( 4001, () => {
    console.log('listening on 4001');
    
})