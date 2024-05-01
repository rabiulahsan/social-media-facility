// import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
// import UseFavourite from "../../Hooks/UseFavourite";
// import Footer from "../../Shared/Footer/Footer";
// import Navbar from "../../Shared/Navbar/Navbar";
// import PostCard from "../../Shared/PostCard/PostCard";

// const Favourites = () => {
//   const [favouriteData, isLoading] = UseFavourite();

//   console.log(sortedFavouritePosts);
//   return (
//     <div>
//       <Navbar></Navbar>
//       <SectionTitle heading="Liked Posts"></SectionTitle>
//       <div className=" flex flex-col mx-[30%]">
//         {isLoading && <SkeletonCard number={16}></SkeletonCard>}
//         {sortedFavouritePosts?.map((post) => (
//           <PostCard key={post?._id} post={post}></PostCard>
//         ))}
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Favourites;