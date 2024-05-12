import { IoCallSharp } from "react-icons/io5";
const ChatBox = () => {
  return (
    <div className="bg-slate-200 rounded  h-full">
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
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default ChatBox;
