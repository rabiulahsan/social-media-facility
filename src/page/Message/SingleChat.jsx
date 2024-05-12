/* eslint-disable react/prop-types */
import ActiveSidebar from "../../Components/ActiveSidebar/ActiveSidebar";
const SingleChat = ({ user }) => {
  // console.log(user);
  return (
    <ActiveSidebar to={`/message/${user?._id}`}>
      <div className="rounded p-3 flex items-center gap-x-4 hover:bg-slate-200 cursor-pointer">
        <div className="">
          <img
            src=""
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        </div>
        <div className=" w-full">
          <div className="flex justify-between items-center">
            <p className="font-bold  text-slate-600">{user?.name}</p>
            <p className="text-sm text-slate-600">Time</p>
          </div>
          <div className="">
            <p className="text-sm text-slate-600 ">{user?.lastMessage}</p>
          </div>
        </div>
      </div>
    </ActiveSidebar>
  );
};

export default SingleChat;
