import Navbar from "../../Shared/Navbar/Navbar";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

const Message = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <Navbar></Navbar>
      <div className=" flex w-full gap-x-6 py-[2%] px-[9%]   flex-[100%]">
        <div className="w-[30%]">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[70%]">
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
};

export default Message;
