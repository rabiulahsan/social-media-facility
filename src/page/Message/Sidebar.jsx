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

    // Get the current time and format it with AM/PM indication
    const time = dayjs();
    // const formatttimeedTime = dayjs().format("h:mm A");

    // console.log(formattedTime);

    const messageBody = {
      senderId: loggedUser?._id,
      text: typingMessage,
      time: time,
      chatId: chat?._id,
    };
    // console.log(messageBody);

    //   posting it to database
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(messageBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setTypingMessage("");
          setMessages([...messages, messageBody]);
          console.log(messageBody);
        }
      });

    // socket.emit("send", typingMessage);
  };

  return (
    <div className="bg-white rounded  h-full ">
      {/* form for searching user  */}
      <div className="">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center"
        >
          <input
            className="rounded-3xl py-2 px-5 w-[100%] text-gray-600 focus:outline-none bg-white"
            type="text"
            placeholder="Search or start a new chat"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>

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
