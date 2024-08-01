import { useState } from "react";
import axios from 'axios';
import PostCreate from "./PostCreate"
import PostList from "./PostList"
import './style.css';

type Comment = {
  id: string;
  content: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  comments: Comment[]
}

function App() {

  const [posts, setPosts] = useState<{ [key:string]:Post}>({})
  
  const fetchPosts = async ()=> {
    try {
      const res = await axios.get('http://localhost:4002/posts');
      setPosts(res.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
    <h1 className="block text-gray-700 text-4xl text-center font-bold mb-2 mt-10">Create Post</h1>
    <PostCreate onPostCreated={fetchPosts}/>
    <hr className="mt-5 shadow-lg border-slate-200" />
    <h1 className="text-gray-700 text-center font-bold mt-5 text-2xl">Posts</h1>
    <PostList posts={posts} setPosts={setPosts}/>
    </div>
  )
  
}

export default App
