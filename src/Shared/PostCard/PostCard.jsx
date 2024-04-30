/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white rounded-xl p-5 mb-5">
      <div className=" flex justify-between mb-4">
        <div className=" flex items-center gap-x-4">
          <img
            src={post?.postImage}
            alt=""
            className="w-[30px] h-[30px] rounded-full"
          />
          <p className="font-semibold">{post?.userName}</p>
        </div>
        <div className="">
          <button className="blue-btn cursor-pointer">
            <Link to={`/post/${post?._id}`}>Details</Link>
          </button>
        </div>
      </div>
      <div className="px-3">
        <p className="text-slate-500">{post?.postDesc}</p>
      </div>
      <div className=" my-5">
        <img
          src={post?.postImage}
          alt=""
          className="h-[350px] w-full   rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default PostCard;
