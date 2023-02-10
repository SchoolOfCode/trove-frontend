import { useEffect, useState } from "react";

export default function usePostsFetcher() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/api/posts`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPosts(data.payload);
    };

    getPosts();
  }, []);

  return posts;
}
