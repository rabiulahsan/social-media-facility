/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UseSingleUser from "../../Hooks/UseSingleUser";

const SearchSingleChat = ({ user, setSearching, searching }) => {
  const [loggedUser] = UseSingleUser();
  const [chatUser, setChatUser] = useState([]);
  // console.log(user);
  const chatUserId = user?.users.filter((user) => user !== loggedUser?._id)[0];
  // console.log(chatUserId);

  useEffect(() => {
    fetch(`http://localhost:5000/allusers/${chatUserId}`)
      .then((response) => response.json())
      .then((data) => {
        setChatUser(data);
      })
      .catch((error) => console.error(error));
  }, [chatUserId]);
  // console.log(chatUser);

  return (
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
          <p className="text-sm text-slate-600">Time</p>
        </div>
        <div className="">
          <p className="text-sm text-slate-600 ">last message</p>
        </div>
      </div>
    </div>
  );
};

export default SearchSingleChat;
