import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const UseAllPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/posts?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setUserPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);
  return [userPosts, isLoading];
};

export default UseAllPosts;
