import { useState } from "react";
import axios from 'axios';

type CommentCreateProps = {
    postId: string;
    onCommentCreated: () => void;
  }

const CommentCreate : React.FC<CommentCreateProps> = ({ postId, onCommentCreated }) => {

    const [content, setContent] = useState<string>('');

    const submitHandler = async (e)=> {
        e.preventDefault();

        try {
            
            await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
                content
            })
    
            setContent('')
            onCommentCreated()
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className="p-4 ">
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
            <label className="block text-black-700 text-sm ml-3">Add Comment</label>
            <div className="flex">

            <input type="text" id="content" value={content} onChange={e => setContent(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-l-xl h-7"/>
            <button className="px-4 bg-gray-700 hover:bg-black text-white rounded-r-xl h-7">Add</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default CommentCreate
