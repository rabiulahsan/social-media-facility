import UseAllPosts from "../../../Hooks/UseAllPosts";
import useAuth from "../../../Hooks/UseAuth";

const Featured = () => {
  const { user } = useAuth();
  const [posts, isLoading] = UseAllPosts();

  // sorted based on likes
  posts.sort((a, b) => b.likes - a.likes);
  return <div></div>;
};

export default Featured;
