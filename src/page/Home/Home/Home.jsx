import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
};

export default Home;
