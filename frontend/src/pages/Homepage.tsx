import { useEffect, useState } from 'react'
import '../scss/Homepage.scss'
import { getAllPosts } from '../services/blogService'
import { IBlog } from '../models/IBlogs'

export const HomePage = () => {
    const [displayPosts, setDisplayPosts] = useState<IBlog[]>([])

    useEffect(() => {
        const getPosts = async () => {
         const data = await getAllPosts()
         setDisplayPosts(data)
         console.log(data)
        }
        getPosts()
         }, [])
         
    return (<>

    <div className="wrapper">
       {displayPosts.map((post) => (
        <div>
            <h2>{post.title}</h2>
            <p>{post.blogText}</p>
            <span>{post.userId}</span>
        </div>
       ))}
    </div>
    </>)
}