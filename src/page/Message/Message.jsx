import { Player } from "@lottiefiles/react-lottie-player";

const Message = () => {
  return (
    <div className="bg-white rounded p-5 h-full flex justify-center items-center">
      <div className="">
        <Player
          className="h-[200px] "
          autoplay
          loop
          src="/message.json"
        ></Player>
        <p className="text-4xl font-bold text-slate-600 text-center">
          Start a chat
        </p>
      </div>
    </div>
  );
};

export default Message;
