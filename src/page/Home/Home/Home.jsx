import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import AddPost from "../AddPost/AddPost";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <AddPost></AddPost>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
};

export default Home;
