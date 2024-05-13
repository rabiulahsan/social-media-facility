/* eslint-disable react/prop-types */

const SearchSingleChat = ({ user, handleCreateChat }) => {
  //   console.log(user);

  return (
    <div
      onClick={() => handleCreateChat(user?._id)}
      className="rounded p-3 flex items-center gap-x-4 hover:bg-slate-200 cursor-pointer border-b border-b-slate-400"
    >
      <img
        src={user?.image}
        alt=""
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <p className="font-bold  text-slate-600">{user?.name}</p>
    </div>
  );
};

export default SearchSingleChat;
