import { useEffect, useRef, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const ChatBox = () => {
  const [typingMessage, setTypingMessage] = useState("");
  const messagesEndRef = useRef(null);
  const userId = 2222;

  const paramId = useParams().id;
  console.log(paramId);

  const socket = io("http://localhost:5000");
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("send", typingMessage);
  };

  const messages = [
    {
      id: 1,
      text: "The quick brown fox",
      senderId: 1111,
    },
    {
      id: 2,
      text: "Jumped over the fence",
      senderId: 2222,
    },
    {
      id: 3,
      text: "And ate some grapes",
      senderId: 1111,
    },
    {
      id: 4,
      text: "He was very hungry",
      senderId: 2222,
    },
    {
      id: 5,
      text: "But then he was full",
      senderId: 1111,
    },
    {
      id: 6,
      text: "So he went to sleep",
      senderId: 2222,
    },
    {
      id: 7,
      text: "Underneath the tree",
      senderId: 1111,
    },
    {
      id: 8,
      text: "With a gentle breeze",
      senderId: 2222,
    },
    {
      id: 9,
      text: "And the stars above",
      senderId: 1111,
    },
    {
      id: 10,
      text: "Shining so brightly",
      senderId: 2222,
    },
    {
      id: 11,
      text: "Underneath the tree",
      senderId: 1111,
    },
    {
      id: 12,
      text: "With a gentle breeze",
      senderId: 2222,
    },
    {
      id: 13,
      text: "And the stars above",
      senderId: 1111,
    },
    {
      id: 14,
      text: "Shining so brightly",
      senderId: 2222,
    },
  ];

  //   for bottom down  after the message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="bg-slate-200 rounded h-[590px] flex flex-col   ">
      {/* Header */}
      <div className="flex justify-between items-center bg-white px-5 py-2 z-10 sticky top-0">
        <div className="flex items-center gap-x-4">
          <img
            src=""
            alt=""
            className="rounded-full h-[35px] w-[35px] object-cover"
          />
          <p className="font-bold text-xl text-slate-600">Name</p>
        </div>
        <div className="flex items-center gap-x-4 text-slate-400 pr-[2%] text-xl ">
          <span className="hover:text-slate-500 cursor-pointer">
            <IoCallSharp></IoCallSharp>
          </span>
        </div>
      </div>

      {/* Message Container */}
      <div className="overflow-y-auto max-h-screen">
        <div className="my-4 px-[4%] ">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`my-3 ${
                message.senderId === userId
                  ? "flex justify-end"
                  : "flex justify-start"
              }`}
            >
              <p
                className={`rounded p-3 ${
                  message.senderId === userId
                    ? "bg-slate-600 text-slate-200"
                    : "bg-white text-slate-600"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Form */}
      <div className="mt-auto px-[5%] py-3 z-10 sticky top-3">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <input
            className="rounded-3xl py-2 px-5 w-[60%] text-gray-600 focus:outline-none bg-white"
            type="text"
            value={typingMessage}
            onChange={(e) => setTypingMessage(e.target.value)}
          />
          <button
            type="submit"
            className="text-2xl font-semibold text-slate-500 ml-4 bg-white hover:bg-slate-100 hover:text-slate-600 p-2 rounded-full"
          >
            <IoIosSend></IoIosSend>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
