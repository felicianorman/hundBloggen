import { ChangeEvent, FormEvent, useState } from "react";
import { IBlog } from "../models/IBlogs";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import '../scss/NewPost.scss'

export const CreatePost = () => {
  const { register, handleSubmit, formState, getValues } = useForm<IBlog>({
    defaultValues: {
        title: "",
        blogText: "",
        userId: "",
        blogImg: null
    }
  });

  const {isSubmitting } = formState;
  const { errors } = formState;
  const onSubmit: SubmitHandler<IBlog> = async() => {
    const formData = {
        title: getValues('title'),
        blogText: getValues('blogText'),
        userId: getValues('userId'),
        blogImg: getValues('blogImg')
    }

    try {
        const res = await axios.post<IBlog>('http://localhost:5002/api/v1/blogs',
        formData)
        console.log(res)
    } catch(error){
        console.log(error)
    }

    setNewBlogPost({title: newTitle, blogText: newText, userId: newUserId, blogImg: newBlogImg})
  }

  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newUserId, setNewUserId] = useState("");
  const [newBlogImg, setBlogImg] = useState(null)
  const [newBlogPost, setNewBlogPost] = useState<IBlog>({
    title: "",
    blogText: "",
    userId: "",
    blogImg: null
  });


  const blogTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }

  const blogText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(e.target.value);
  }

  const blogId = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserId(e.target.value);
  }

  const blogPic = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files || e.target.files.length == 0) {
      return
    }
    else {
      console.log(e.target.files[0])
    }

  }

  ;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Skriv nytt blogginlägg</h2>
        <label>Titel</label>
        <input type="text" {...register("title")} onChange={blogTitle}></input>

        <label>Text</label>
        <textarea {...register("blogText")} onChange={blogText}></textarea>

        <label>Bild</label>
        <input type="file" {...register("blogImg")} onChange={blogPic}></input>

        <label>User</label>
        <input type="text" {...register("userId")} onChange={blogId}></input>


        <button type="submit">Submit</button>
      </form>
      <div className="blog--container">
        <h2> {newBlogPost.title}</h2>
        <p>{newBlogPost.blogText}</p>
        <span> {newBlogPost.userId}</span>
      </div>
    </>
  );
};
