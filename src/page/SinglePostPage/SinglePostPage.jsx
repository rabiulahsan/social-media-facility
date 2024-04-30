import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { FaHeart } from "react-icons/fa";

const SinglePostPage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  //create object for pagebanner section
  const details = {
    image: loadedData?.postImage,
    name: "Post",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}> </PageBanner>

      <div className="my-[3%] flex  justify-center items-center ">
        <div className="w-1/2">
          <img
            className="h-[450px] w-full mx-auto "
            src={loadedData?.postImage}
            alt=""
          />
          <p className="text-slate-600 font-semibold text-xl px-[5%] mt-3 flex items-center gap-x-1">
            {loadedData?.likes}
            <span className="text-lg ">
              <FaHeart />
            </span>
          </p>

          <p className="mt-[3%] mb-[1%] text-center text-4xl font-bold text-gray-700">
            {loadedData?.userName}
          </p>
          <p className="text-center text-gray-700">{loadedData?.userEmail}</p>
        </div>
      </div>
      <p className="px-[12%] w-2/3 text-lg text-gray-600 text-center mx-auto leading-10">
        {loadedData?.postDesc}
      </p>
      <Footer></Footer>
    </div>
  );
};

export default SinglePostPage;
