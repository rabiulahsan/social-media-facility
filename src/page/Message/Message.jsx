import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ChatBox from "./ChatBox";
import Sidebar from "./Sidebar";

const Message = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className=" flex w-full gap-x-5">
        <div className="w-1/4">
          <Sidebar></Sidebar>
        </div>
        <div className="3/4">
          <ChatBox></ChatBox>
        </div>
      </div>

      {/* <div className="pt-[5%] ">
        <p className="text-2xl text-slate-700 font-bold text-center mt-[2%]">
          No message found here
        </p>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Message;
