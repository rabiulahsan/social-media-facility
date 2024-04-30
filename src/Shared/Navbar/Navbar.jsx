import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="sticky top-0 left-0 z-50">
        <div className="flex justify-between items-center w-full absolute top-0 left-0  py-3 px-[16%] text-slate-600 bg-white">
          <Link to="/">
            <p className="text-3xl text-sky-600 font-extrabold">Explorer</p>
          </Link>
          <div className="">
            <ul className="flex text-[18px] font-semibold">
              <li className="mx-5 hover:text-sky-500">
                <span>
                  <ActiveLink to="/">Home</ActiveLink>
                </span>
              </li>
              <li className="mx-5 hover:text-sky-500">
                <span>
                  <ActiveLink to="/media">Media</ActiveLink>
                </span>
              </li>
              <li className="mx-5 hover:text-sky-500">
                <span>
                  <ActiveLink to="/message">Message</ActiveLink>
                </span>
              </li>
              <li className="mx-5 hover:text-sky-500">
                <span>
                  <ActiveLink to="/about">About</ActiveLink>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <img
                  className="h-[40px] rounded-[50%]"
                  src={user?.photoURL}
                  alt=""
                />
              </>
            ) : (
              <button className="blue-btn">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
