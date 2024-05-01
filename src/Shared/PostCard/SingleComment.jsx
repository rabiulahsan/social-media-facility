/* eslint-disable react/prop-types */
const SingleComment = ({ comment }) => {
  //   console.log(comment);
  return (
    <div className="bg-slate-100 text-slate-600 rounded p-4">
      <div className="flex items-center gap-x-3">
        <img
          src={
            comment?.commentatorImage
              ? comment?.commentatorImage
              : "/profile.png"
          }
          alt=""
          className="h-[30px] w-[30px] rounded-full object-cover"
        />
        <p className="font-semibold text-base">{comment?.commentatorName}</p>
      </div>
      <div className="mt-3 px-2">
        <p className="text-slate-500 font-semibold text-[14px]">
          {comment?.comment}
        </p>
      </div>
    </div>
  );
};

export default SingleComment;
