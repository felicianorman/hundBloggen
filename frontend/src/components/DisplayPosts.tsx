import { useEffect, useState } from "react";
import { getAllPosts } from "../services/blogService";
import { IBlog } from "../models/IBlogs";
import "../scss/AllPosts.scss";
import '../../../backend/uploads/2023-09-15T17-31-14.770ZVaccination_Loke.png'

export const DisplayPosts = () => {
  const [displayPosts, setDisplayPosts] = useState<IBlog[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getAllPosts();
      setDisplayPosts(data);
      console.log(data);
    };
    getPosts();
  }, []);

  return (
    <>
      {displayPosts.map((post) => (
        <div className="blog--container">
          <h2>{post.title}</h2>
          <p>{post.blogText}</p>
          <img src={post.blogImg && post.blogImg}/>
          <span>Skriven av: {post.userId}</span>
        </div>
      ))}
    </>
  );
};
