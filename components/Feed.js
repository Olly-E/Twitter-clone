import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'nuel Akinsiku',
      username: 'EmmaCodes',
      userImg: 'https://nuelportfolio.netlify.app/static/media/me-about.5cea161175f687029ed3.png',
      img: "https://images.unsplash.com/photo-1657664043009-c4975cb4eed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      text: 'nice view',
      timestamp: '2 hours ago'
    },
    {
    id: '2',
      name: 'nuel Akinsiku',
      username: 'EmmaCodes',
      userImg: 'https://nuelportfolio.netlify.app/static/media/me-about.5cea161175f687029ed3.png',
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1874&q=80",
      text: 'wow!!!',
      timestamp: '2 days ago'
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => {
          return (
            <Post post={post} key={post.id}/>
          )
        })}
    </div>
  )
}
