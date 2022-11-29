import { useEffect, useState } from "react";

export default function usePostsFetcher() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
  const getPosts = async () => {
    const response = await fetch("http://localhost:3005/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPosts(data.payload);
  };

  getPosts();
  }, []);

  return posts;
}