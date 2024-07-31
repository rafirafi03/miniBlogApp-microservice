import { useState, useEffect } from "react";
import axios from "axios";

type Comment = {
    id: string;
    content: string;
  };
  
  type CommentListProps = {
    postId: string;
  }
  

const CommentList: React.FC<CommentListProps> = ({ postId }) => {

    const [comments, setComments] = useState<Comment[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            setComments(res.data);
          } catch (error) {
            console.error("Error fetching comments:", error);
          }
    }

    useEffect(() => {
        fetchData()
    }, [postId])

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

  return <ul>{renderedComments}</ul>
}

export default CommentList;
