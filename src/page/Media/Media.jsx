import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import UseAllPosts from "../../Hooks/UseAllPosts";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import PostCard from "../../Shared/PostCard/PostCard";

const Media = () => {
  const [posts, isLoading] = UseAllPosts();
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className=" flex flex-col mx-[30%] mt-[5%]">
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {posts?.map((post) => (
          <PostCard key={post?._id} post={post}></PostCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Media;
