import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import FadeAnimations from "../../Animations/FadeAnimations";
import { Player } from "@lottiefiles/react-lottie-player";

const Message = () => {
  return (
    <div>
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

        <p className="text-2xl font-bold text-center mt-[2%]">
          There is no message here
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Message;
