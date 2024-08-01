import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import './style.css'

type Comment = {
  id: string;
  content: string;
};

type Post = {
    id: string;
    title: string;
    content: string;
    comments: Comment[];
  }


const PostList: React.FC = () => {

  const [posts, setPosts] = useState<{ [key: string]: Post }>({});

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4002/posts");

      console.log(res.data)

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
      return (
      <div className="card w-full sm:w-1/2 lg:w-1/3 p-4" key={post.id}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-start">{post.title}</h3>
                <hr className="mt-5" />
                <h6 className="text-black font-bold mt-3">comments</h6>
                <CommentList comments={post.comments}/>
                <CommentCreate postId={post.id}/>
            </div>
        </div>
      </div>
      ); 

  })

  return <div className="d-flex flex-row flex flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default PostList;
