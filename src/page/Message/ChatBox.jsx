import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const ChatBox = () => {
  const [typingMessage, setTypingMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-200 rounded  h-full flex flex-col">
      <div className="flex justify-between items-center bg-white px-5 py-2">
        <div className="flex items-center gap-x-4">
          <img src="" alt="" className="rounded-full h-[35px] w-[35px]" />
          <p className="font-bold text-xl text-slate-600">Name</p>
        </div>
        <div className="flex items-center gap-x-4 text-slate-400 pr-[2%] text-xl sticky top-0 ">
          <span className="hover:text-slate-500 cursor-pointer">
            <IoCallSharp></IoCallSharp>
          </span>
        </div>
      </div>
      <div className=" my-4 px-5">
        <p className="  bg-white rounded-sm p-3 text-slate-500 ">hellow</p>
      </div>
      <div className="mt-auto px-[5%] my-3 ">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <input
            className="  rounded-3xl  py-2 px-5 w-[60%] text-gray-600   focus:outline-none bg-white "
            type="text"
            value={typingMessage}
            onChange={(e) => setTypingMessage(e.target.value)}
          />
          <button
            type="submit"
            className=" text-2xl   font-semibold text-slate-500 ml-4 bg-white hover:bg-slate-100 hover:text-slate-600 p-2 rounded-full"
          >
            <IoIosSend></IoIosSend>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
