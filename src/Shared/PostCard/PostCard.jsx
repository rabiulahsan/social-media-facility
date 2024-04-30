/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import UseFavourite from "../../Hooks/UseFavourite";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PostCard = ({ post }) => {
  // console.log(post);
  const { user } = useAuth();
  const [isLike, setIsLike] = useState(false);
  const [favouriteData] = UseFavourite();
  const [likesCount, setLikesCount] = useState(post?.likes);

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  //set default or like
  useEffect(() => {
    if (user && favouriteData.length > 0) {
      const isPostLiked = favouriteData.some(
        (data) => data.postId === post?._id
      );
      setIsLike(isPostLiked);
    } else {
      setIsLike(false); // If user is not authenticated or no favourite data available, set isLike to false
    }
  }, [user, post?._id, favouriteData]);

  // removing from favourites
  const handleFavouriteDelete = () => {
    fetch(`http://localhost:5000/favourites/${post?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount) {
          Toast.fire({
            icon: "success",
            title: "Removed Like",
          });
          setIsLike(false);
          setLikesCount((prevCount) => prevCount - 1);

          //decrease the like
          const postBody = {
            likes: post?.likes - 1,
          };
          fetch(`http://localhost:5000/posts/${post?._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postBody),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount == 1) {
                console.log(post?.likes);
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error removing like:", error);
      });
  };

  //posting the lilke one
  const handleFavourite = () => {
    const savedData = {
      userEmail: user?.email,
      postId: post?._id,
    };
    fetch("http://localhost:5000/favourites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Liked",
          });
          setIsLike(!isLike);
          setLikesCount((prevCount) => prevCount + 1);

          //increase the like
          const postBody = {
            likes: post?.likes + 1,
          };
          fetch(`http://localhost:5000/posts/${post?._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postBody),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount == 1) {
                console.log(post?.likes);
              }
            });
        }
      });
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
              {likesCount}
            </span>
          </div>
        ) : (
          <p className="text-gray-500 text-base font-semibold hover:underline hover:text-orange-400">
            <Link to="/login">Login to react on this</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
