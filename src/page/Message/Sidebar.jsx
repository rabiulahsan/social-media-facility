import { useEffect, useState } from "react";
import SingleChat from "./SingleChat";
import UseSingleUser from "../../Hooks/UseSingleUser";
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  const [loggedUser] = UseSingleUser();
  // console.log(loggedUser?._id);
  const [myChat, setMyChat] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chats/${loggedUser?._id}`)
      .then((response) => response.json())
      .then((data) => {
        setMyChat(data);
      })
      .catch((error) => console.error(error));
  }, [loggedUser]);

  // console.log(myChat);

  // handle Search
  const handleSearch = (e) => {
    e.preventDefault();

    //   posting it to database
    // fetch(`http://localhost:5000/chatusers?value=${searchValue}`)
    //   .then((res) => res.json())
    //   .then((data) => {});
  };

  return (
    <div className="bg-white rounded  h-full ">
      {/* form for searching user  */}
      <div className=" px-12 pt-5 pb-4 ">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center relative"
        >
          <input
            className="rounded-3xl py-2 px-5 w-[100%] text-gray-600 focus:outline-none bg-slate-200"
            type="text"
            placeholder="Search or start a new chat"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoSearch className="absolute top-1/2 right-8 text-slate-400 text-lg transform -translate-y-1/2 " />
        </form>
      </div>

      <p className="font-bold text-slate-600 text-xl text-center p-4 border-b border-b-slate-200">
        All Chats
      </p>
      <div className="flex flex-col gap-y-2 overflow-y-auto h-[520px] py-4 px-5 mt-2">
        {myChat?.map((user, idx) => (
          <SingleChat key={idx} user={user}></SingleChat>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
