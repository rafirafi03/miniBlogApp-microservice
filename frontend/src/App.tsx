import PostCreate from "./PostCreate"
import PostList from "./PostList"
import './style.css'

function App() {
  
  return (
    <div>
    <h1 className="block text-blue-800 text-4xl text-center font-bold mb-2 mt-10">Create Post</h1>
    <PostCreate/>
    <hr className="mt-5 shadow-lg border-slate-200" />
    <h1 className="text-blue-800 text-center font-bold mt-5 text-2xl">Posts</h1>
    <PostList/>
    </div>
  )
  
}

export default App
