import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../Hooks/UseAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const About = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser(data);
      })
      .catch((error) => console.error(error));
  }, [user]);
  // console.log(loggedUser);

  // functon for logout
  const handleLogOut = () => {
    logOut()
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className="mt-[5%] mb-[3%]">
        <img
          src={user?.photoURL ? user?.photoURL : "/icon.png"}
          className="h-[120px] w-[120px] rounded-full mx-auto"
          alt=""
        />
      </div>
      <div className="">
        <div className=" flex justify-around items-center mb-[3%] mx-[15%]">
          <div className="">
            {/* <FadeAnimations
              direction="right"
              once={false}
              delay={0.3}
              duration={0.5}
            > */}
            <div className="">
              <p className="text-sm text-gray-500 font-semibold ">Name</p>
              <p className=" text-lg font-bold">{loggedUser?.name}</p>
            </div>
            <div className="my-7">
              <p className="text-sm text-gray-500 font-semibold mb-1">
                College Name
              </p>
              <p className=" text-lg font-bold">
                {loggedUser?.college_name
                  ? loggedUser?.college_name
                  : " Not Given"}
              </p>
            </div>
            {/* </FadeAnimations> */}
          </div>
          <div className="">
            {/* <FadeAnimations
              direction="left"
              once={false}
              delay={0.3}
              duration={0.5}
            > */}
            <div className="">
              <p className="text-sm text-gray-500 font-semibold ">Email</p>
              <p className=" text-lg font-bold">{user?.email}</p>
            </div>

            <div className=" my-7">
              <p className="text-sm text-gray-500 font-semibold">Address</p>
              <p className=" text-lg font-bold">
                {loggedUser?.address ? loggedUser?.address : " Not Given"}
              </p>
            </div>
            {/* </FadeAnimations> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[3%] gap-x-5">
        <button className="blue-btn cursor-pointer font-bold ">
          <Link to="/update-about">Edit</Link>
        </button>
        <button
          className="blue-btn cursor-pointer font-bold "
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
      <SectionTitle heading="My posts"></SectionTitle>
      <Footer></Footer>
    </div>
  );
};

export default About;
