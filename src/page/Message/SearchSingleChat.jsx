/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import UseSingleUser from "../../Hooks/UseSingleUser";
import { useNavigate } from "react-router-dom";

const SearchSingleChat = ({ user, setSearching }) => {
  const [loggedUser] = UseSingleUser();
  const navigate = useNavigate();

  console.log(user);

  const handleCreateChat = () => {
    setSearching(false);
    navigate(`/message/${user?._id}`);
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
