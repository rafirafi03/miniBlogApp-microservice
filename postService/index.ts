import express from 'express';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
app.use(bodyParser.json())
app.use(cors())

type Post = {
    id: string;
    title: string;
}

type Posts = {
    [key: string] : Post;
}

const posts : Posts = {}

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post('/posts', (req,res) => {
    const id = randomBytes(4).toString('hex');

    const {title} = req.body;

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
})

app.listen(4000, ()=> {
    console.log('listening on 4000');
})