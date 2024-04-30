import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10  bg-base-200 flex items-center justify-center mt-[5%]">
      <div className="">
        <div className="flex justify-around items-center mb-[5%]">
          <Link to="/" className="hover:underline hover:font-semibold">
            Home
          </Link>
          <Link to="/media" className="hover:underline hover:font-semibold">
            Media
          </Link>
          <Link to="/message" className="hover:underline hover:font-semibold">
            Message
          </Link>
          <Link to="/about" className="hover:underline hover:font-semibold">
            About
          </Link>
        </div>

        <div>
          <p className=" text-center">
            Copyright © 2023 - All right reserved by{" "}
            <span className="font-bold">Share Words </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
