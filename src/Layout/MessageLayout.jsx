import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Sidebar from "../page/Message/Sidebar";

const MessageLayout = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <Navbar></Navbar>
      <div className=" flex w-full gap-x-6 py-[2%] px-[9%]   flex-grow">
        <div className="w-[30%]">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[70%]">
          {/* <ChatBox></ChatBox> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
