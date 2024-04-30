import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAllPosts from "../../../Hooks/UseAllPosts";
import SkeletonCard from "../../../Components/SkeletonCard/SkeletonCard";
import PostCard from "../../../Shared/PostCard/PostCard";

const Featured = () => {
  const [posts, isLoading] = UseAllPosts();

  // sorted based on likes
  posts.sort((a, b) => b.likes - a.likes);
  //   console.log(posts);

  return (
    <div>
      <SectionTitle heading="Most Liked Post"></SectionTitle>;
      <div className=" flex flex-col mx-[30%]">
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {posts?.slice(0, 3).map((post) => (
          <PostCard key={post?._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
