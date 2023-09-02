import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5002/api/v1/blogs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5002/api/v1/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};