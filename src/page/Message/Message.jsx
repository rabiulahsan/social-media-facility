import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import FadeAnimations from "../../Animations/FadeAnimations";
import { Player } from "@lottiefiles/react-lottie-player";

const Message = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className="pt-[5%] ">
        <FadeAnimations
          direction="down"
          once={false}
          delay={0.3}
          duration={0.5}
        >
          <Player
            className="h-[300px]  w-[300px]"
            autoplay
            loop
            src="/empty.json"
          ></Player>
        </FadeAnimations>

        <p className="text-2xl text-slate-700 font-bold text-center mt-[2%]">
          No message found here
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Message;
