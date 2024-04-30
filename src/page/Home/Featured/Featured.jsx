import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAllPosts from "../../../Hooks/UseAllPosts";
import useAuth from "../../../Hooks/UseAuth";
import SkeletonCard from "../../../Components/SkeletonCard/SkeletonCard";
import PostCard from "../../../Shared/PostCard/PostCard";

const Featured = () => {
  const { user } = useAuth();
  const [posts, isLoading] = UseAllPosts();

  // sorted based on likes
  posts.sort((a, b) => b.likes - a.likes);
  console.log(posts);
  <SectionTitle heading="Most Liked Post"></SectionTitle>;
  <div className=" flex flex-col ">
    {isLoading && <SkeletonCard number={16}></SkeletonCard>}
    {posts?.map((post) => (
      <PostCard key={post._id} post={post}></PostCard>
    ))}
  </div>;
  return <div></div>;
};

export default Featured;
