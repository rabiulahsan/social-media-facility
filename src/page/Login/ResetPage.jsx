import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const ResetPage = () => {
  const emailRef = useRef(null);
  const { resetEmail } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire("Enter an email");
      return;
    }
    resetEmail(email)
      .then(() => {
        Swal.fire("Check your email");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center bg-[#cecceb] h-screen">
      <div className="bg-white shadow-md rounded p-[5%]">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          ref={emailRef} // Assign the ref here
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button onClick={handleResetPass} className="blue-btn mt-5">
          Get Reset Link
        </button>
        {/* for error  */}
        <p className="text-red-600 text-lg font-semibold mt-3">{error}</p>
      </div>
    </div>
  );
};

export default ResetPage;
