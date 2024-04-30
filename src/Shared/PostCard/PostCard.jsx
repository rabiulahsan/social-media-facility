/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import { useState } from "react";

const PostCard = ({ post }) => {
  console.log(post);
  const { user } = useAuth();
  const [isLike, setIsLike] = useState(false);

  const handleFavouriteDelete = () => {
    setIsLike(false);
  };
  const handleFavourite = () => {
    setIsLike(true);
  };
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
        {user ? (
          <div className="text-red-600 mt-3 px-4 flex gap-x-1 items-center">
            <span
              onClick={isLike ? handleFavouriteDelete : handleFavourite}
              className={`${
                isLike ? "text-red-600" : "text-slate-600"
              } text-xl font-bold cursor-pointer`}
              title="like"
            >
              {isLike ? <FaHeart /> : <FaRegHeart />}
            </span>
            <span className="text-slate-700 font-semibold text-lg">
              {post?.likes}
            </span>
          </div>
        ) : (
          <p className="text-gray-500 text-base font-semibold hover:underline hover:text-orange-400">
            <Link to="/login">Login for react on this</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
