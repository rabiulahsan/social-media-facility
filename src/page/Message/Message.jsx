import Navbar from "../../Shared/Navbar/Navbar";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

const Message = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <Navbar></Navbar>
      <div className=" flex w-full gap-x-6 p-[2%]   flex-[100%]">
        <div className="w-1/4">
          <Sidebar></Sidebar>
        </div>
        <div className="w-3/4">
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
};

export default Message;
