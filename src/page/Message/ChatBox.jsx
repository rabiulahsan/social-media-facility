import { useEffect, useRef, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import UseSingleUser from "../../Hooks/UseSingleUser";
import dayjs from "dayjs";
import { Player } from "@lottiefiles/react-lottie-player";

const ChatBox = () => {
  const [loggedUser] = UseSingleUser();
  const [typingMessage, setTypingMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatUserDetails, setChatUserDetails] = useState([]);

  const userId = useParams().id;
  // console.log(userId);

  // getting details for chat users
  useEffect(() => {
    fetch(`http://localhost:5000/allusers/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setChatUserDetails(data);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  // finding there is chat or not
  useEffect(() => {
    fetch(
      `http://localhost:5000/chat?loggedUserId=${loggedUser?._id}&userId=${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChat(data);
      })
      .catch((error) => console.error(error));
  }, [loggedUser, userId]);

  // console.log(chat?._id);

  //getting all message for this chat id
  useEffect(() => {
    fetch(`http://localhost:5000/messages/${chat?._id}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => console.error(error));
  }, [chat]);
  // console.log(messages);

  // const socket = io("http://localhost:5000");
  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
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
    console.log(messageBody);

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
            src={chatUserDetails?.image}
            alt=""
            className="rounded-full h-[30px] w-[30px] object-cover"
          />
          <p className="font-bold text-lg text-slate-600">
            {chatUserDetails?.name}
          </p>
        </div>
        <div className="flex items-center gap-x-4 text-slate-400 pr-[2%] text-xl ">
          <span className="hover:text-slate-500 cursor-pointer">
            <IoCallSharp></IoCallSharp>
          </span>
        </div>
      </div>

      {/* Message Container */}
      {messages?.length > 0 ? (
        <div className="overflow-y-auto max-h-screen">
          <div className="my-4 px-[4%] ">
            {messages?.map((message) => (
              <div
                key={message._id}
                className={`my-3 ${
                  message.senderId === loggedUser?._id
                    ? "flex justify-end"
                    : "flex justify-start"
                }`}
              >
                <p
                  className={`rounded p-3 ${
                    message.senderId === loggedUser?._id
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
      ) : (
        <div className="h-full flex justify-center items-center">
          <div className="">
            <Player
              className="h-fit "
              autoplay
              loop
              src="/message.json"
            ></Player>
            <p className="text-4xl font-bold text-slate-600 text-center">
              Start a chat
            </p>
          </div>
        </div>
      )}

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
