import { useEffect, useState } from "react";
import UseSingleUser from "../../Hooks/UseSingleUser";
import SingleComment from "./SingleComment";

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
  console.log(commentData);
  return (
    <div className="">
      <div className=" flex flex-col gap-y-5 mx-[5%]">
        {commentData?.map((comment) => (
          <SingleComment key={comment?._id} comment={comment}></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default MainComment;
