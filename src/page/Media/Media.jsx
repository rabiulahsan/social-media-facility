import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import UseAllPosts from "../../Hooks/UseAllPosts";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import PostCard from "../../Shared/PostCard/PostCard";

const Media = () => {
  const [posts, isLoading] = UseAllPosts();
  //sorted posts
  const sortedPosts = posts?.slice().sort((a, b) => {
    // Convert the postedTime strings to Date objects for comparison
    const dateA = new Date(a.postedTime);
    const dateB = new Date(b.postedTime);

    // Sort by descending order of postedTime
    return dateB - dateA;
  });

  // Now sortedUserPosts contains the userPosts array sorted by postedTime in descending order

  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className=" flex flex-col mx-[30%] mt-[5%]">
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {sortedPosts?.map((post) => (
          <PostCard key={post?._id} post={post}></PostCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Media;
