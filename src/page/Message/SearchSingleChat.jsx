/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UseSingleUser from "../../Hooks/UseSingleUser";
import { useNavigate } from "react-router-dom";

const SearchSingleChat = ({
  user,
  setSearching,
  setSearchValue,
  setMyChat,
}) => {
  const [loggedUser] = UseSingleUser();
  const navigate = useNavigate();

  //   console.log(user);

  const handleCreateChat = () => {
    setSearching(false);
    setSearchValue("");
    navigate(`/message/${user?._id}`);

    const chatBody = {
      loggedUserId: loggedUser?._id,
      userId: user?._id,
    };
    // console.log(chatBody);

    //   posting it to database
    fetch("http://localhost:5000/chats", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chatBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyChat(data);
      });
  };
  return (
    <div
      onClick={handleCreateChat}
      className="rounded p-3 flex items-center gap-x-4 hover:bg-slate-200 cursor-pointer border-b border-b-slate-400"
    >
      <img
        src={user?.image}
        alt=""
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <p className="font-bold  text-slate-600">{user?.name}</p>
    </div>
  );
};

export default SearchSingleChat;
