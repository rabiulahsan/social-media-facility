import { useEffect, useState } from "react";
import SingleChat from "./SingleChat";
import UseSingleUser from "../../Hooks/UseSingleUser";

const Sidebar = () => {
  const [loggedUser] = UseSingleUser();
  // console.log(loggedUser);
  const [myChat, setMyChat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chats/${loggedUser?._id}`)
      .then((response) => response.json())
      .then((data) => {
        setMyChat(data);
      })
      .catch((error) => console.error(error));
  }, [loggedUser]);

  // console.log(myChat);

  return (
    <div className="bg-white rounded  h-full ">
      <p className="font-bold text-slate-600 text-xl text-center p-4 border border-b-slate-400">
        All Chats
      </p>
      <div className="flex flex-col gap-y-2 overflow-y-auto h-[520px] py-2 px-4 mt-2">
        {myChat?.map((user, idx) => (
          <SingleChat key={idx} user={user}></SingleChat>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
