import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

type Comment = {
    id: string;
    content: string;
}

type Post = {
    id:string;
    title:string;
    comments:Comment[]
}


const app = express();
app.use(bodyParser.json())
app.use(cors());

const posts : {[key: string]: Post} = {};

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post('/events', (req,res) => {
    const { type, data } = req.body; 

    if(type == 'PostCreated') {
        const { id, title } = data as Post
        posts[id] = {id, title, comments: []}
    }

    if(type == 'CommentCreated') {
        const {id, content, postId} = data as Comment & { postId: string};

        const post = posts[postId];
        if (post) {
            post.comments.push({ id, content });
        }
    }

    console.log(posts);
    

    res.send({})
})

app.listen(4002, ()=> {
    console.log('Listening on 4002')
})