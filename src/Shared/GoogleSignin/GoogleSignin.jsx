import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
const GoogleSignin = () => {
  const { user, googleLogin } = useAuth();
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    if (user) {
      alert("At first logout");
      return;
    } else {
      googleLogin() //todo google log in failure
        .then((result) => {
          const loggedInUser = result.user;
          const saveUser = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            image: loggedInUser?.photoURL,
          };
          console.log(saveUser);
          fetch("https://social-facilites-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div
      className=" border border-blue-500 flex text-center text-white cursor-pointer font-semibold"
      onClick={handleGoogleSignIn}
    >
      <span className="text-2xl p-2">
        <FcGoogle></FcGoogle>
      </span>
      <span className="bg-blue-500 w-full p-2 hover:bg-blue-600">
        Sign in With Google
      </span>
    </div>
  );
};

export default GoogleSignin;
