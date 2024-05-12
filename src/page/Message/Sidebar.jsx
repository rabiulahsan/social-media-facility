import SingleChat from "./SingleChat";

const Sidebar = () => {
  const users = [
    {
      _id: 1001,
      name: "John",
      lastMessage: "Hello, how are you?",
    },
    {
      _id: 1002,
      name: "Alice",
      lastMessage: "I'm good, thank you!",
    },
    {
      _id: 1003,
      name: "Bob",
      lastMessage: "What are you up to?",
    },
    {
      _id: 1004,
      name: "Emma",
      lastMessage: "Just finished work.",
    },
    {
      _id: 1005,
      name: "Michael",
      lastMessage: "Let's meet tomorrow.",
    },
    {
      _id: 1006,
      name: "Sophia",
      lastMessage: "Sure, where?",
    },
    {
      _id: 1007,
      name: "James",
      lastMessage: "How about the park?",
    },
    {
      _id: 1008,
      name: "Olivia",
      lastMessage: "Sounds good!",
    },
    {
      _id: 1009,
      name: "William",
      lastMessage: "See you there!",
    },
    {
      _id: 1010,
      name: "Charlotte",
      lastMessage: "Sure, see you tomorrow.",
    },
  ];

  return (
    <div className="bg-white rounded  h-full ">
      <p className="font-bold text-slate-600 text-xl text-center p-4 border border-b-slate-400">
        All Chats
      </p>
      <div className="flex flex-col gap-y-2 overflow-y-auto h-[520px] py-2 px-4 mt-2">
        {users?.map((user, idx) => (
          <SingleChat key={idx} user={user}></SingleChat>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
