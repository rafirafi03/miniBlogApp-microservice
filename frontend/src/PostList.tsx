import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {

    type Post = {
        id: string;
        title: string;
        content: string;
      }

  const [posts, setPosts] = useState<{ [key: string]: Post }>({});

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/posts");

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
                <hr />
                <h6>comments</h6>
                <CommentList postId={post.id}/>
                <CommentCreate postId={post.id}/>
            </div>
        </div>
      </div>
      ); 

  })

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default PostList;
