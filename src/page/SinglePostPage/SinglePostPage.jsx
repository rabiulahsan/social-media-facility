import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const SinglePostPage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default SinglePostPage;
