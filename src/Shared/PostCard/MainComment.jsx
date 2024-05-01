import { useEffect, useState } from "react";
import UseSingleUser from "../../Hooks/UseSingleUser";
import SingleComment from "./SingleComment";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
const MainComment = ({ id }) => {
  //   console.log(id);
  const [commentData, setCommentData] = useState([]);
  const [loggedUser] = UseSingleUser();

  useEffect(() => {
    fetch(`http://localhost:5000/comments?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  //   console.log(commentData);

  //submitting the comment
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {};
  return (
    <div className="">
      <div className=" flex flex-col gap-y-5 mx-[5%]">
        {commentData?.length > 0 ? (
          commentData?.map((comment) => (
            <SingleComment key={comment?._id} comment={comment}></SingleComment>
          ))
        ) : (
          <p className="text-center font-bold text-slate-600 mb-5">
            No comment
          </p>
        )}
      </div>

      {/* posting comment section  */}
      <div className="bg-slate-100 p-4 mt-[4%] mx-[2%]  rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center gap-x-4">
            <img
              className="h-[30px] w-[30px] rounded-[50%] object-cover"
              src={loggedUser?.image}
              alt=""
            />
            <textarea
              name="comment"
              placeholder="Add a comment..."
              className="bg-transparent border border-slate-400 focus:outline-none focus:border-[#8b8bde] text-sm text-[#898c90] font-semibold rounded-md w-[75%] px-4 py-2 placeholder:text-gray-500 placeholder:font-semibold placeholder:text-sm "
              cols="25"
              {...register("comment", { required: true })}
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 h-[40px] text-white rounded px-3 py-2 font-bold text-sm"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainComment;
