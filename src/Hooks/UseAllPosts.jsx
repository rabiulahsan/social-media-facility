import { useEffect, useState } from "react";

const UseAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://social-facilites-server.vercel.app/allposts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return [posts, isLoading];
};

export default UseAllPosts;
