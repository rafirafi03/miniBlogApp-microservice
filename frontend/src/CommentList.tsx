import './style.css';

type Comment = {
    id: string;
    content: string;
  };

  type CommentListProps = {
    comments: Comment[]
  }
  
const CommentList: React.FC<CommentListProps> = ({ comments }) => {

    const renderedComments = comments.map(comment => {
        return( <li key={comment.id} className="py-2 border-b border-gray-300">{comment.content}</li>)
    })

  return (<ul className="custom-list">{renderedComments}</ul>)
}   

export default CommentList;
