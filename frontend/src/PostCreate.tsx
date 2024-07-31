import { FormEvent, useState } from 'react';
import axios from 'axios'
import './style.css';


const PostCreate: React.FC = () => {

    const [title,setTitle] = useState<string>('');

    const submitHandler = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {    
            await axios.post('http://localhost:4000/posts', {
                title
            })
    
            setTitle('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Enter your title"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
      );
    
}

export default PostCreate
