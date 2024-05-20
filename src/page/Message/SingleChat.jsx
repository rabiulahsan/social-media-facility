/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ActiveSidebar from "../../Components/ActiveSidebar/ActiveSidebar";
import UseSingleUser from "../../Hooks/UseSingleUser";
const SingleChat = ({ user }) => {
  const [loggedUser] = UseSingleUser();
  const [chatUser, setChatUser] = useState([]);
  // console.log(user);
  const chatUserId = user?.users.filter((user) => user !== loggedUser?._id)[0];
  // console.log(chatUserId);

  useEffect(() => {
    fetch(`https://social-facilites-server.vercel.app/allusers/${chatUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setChatUser(data);
      })
      .catch((error) => console.error(error));
  }, [chatUserId]);
  // console.log(chatUser);

  return (
    <ActiveSidebar to={`/message/${chatUser?._id}`}>
      <div className="rounded p-3 flex items-center gap-x-4 hover:bg-slate-200 cursor-pointer">
        <div className="">
          <img
            src={chatUser?.image}
            alt=""
            className="w-[40px] h-[35px] rounded-full object-cover"
          />
        </div>
        <div className=" w-full">
          <div className="flex justify-between items-center">
            <p className="font-bold  text-slate-600">{chatUser?.name}</p>
            {/* <p className="text-sm text-slate-600">Time</p> */}
          </div>
          <div className="">
            {/* <p className="text-sm text-slate-600 ">last message</p> */}
          </div>
        </div>
      </div>
    </ActiveSidebar>
  );
};

export default SingleChat;
