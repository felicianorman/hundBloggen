import { useEffect, useState } from "react";
import { getAllPosts } from "../services/blogService";
import { IBlog } from "../models/IBlogs";
import "../scss/AllPosts.scss";

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
          <span>Skriven av: {post.userId}</span>
        </div>
      ))}
    </>
  );
};
