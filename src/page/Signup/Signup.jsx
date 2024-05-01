import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import GoogleSignin from "../../Shared/GoogleSignin/GoogleSignin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, user } = useAuth();
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  user && navigate("/");

  const onSubmit = (data) => {
    // confirm password condition

    if (data.password === data.confirmPassword) {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              image: data.photoURL,
            };
            fetch("https://social-facilites-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      });
    } else {
      seterror("Both password dont match");
      return;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#ebeaf8] h-fit ">
        <div className="card bg-white shadow-md rounded px-10 pt-8 pb-8 mb-4 w-1/4 my-[5%]">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="confirm password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.confirmPassword?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>

            <p className="text-red-600 my-5 text-lg">{error}</p>

            <div className="form-control mt-6">
              <input
                className="cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-gray-600 my-2">or</p>
          <div className="my-5">
            <GoogleSignin></GoogleSignin>
          </div>
          <p className="flex flex-col text-center text-gray-500">
            Don&apos;t have an account?
            <Link to={"/login"}>
              <span className="text-blue-800 font-semibold hover:underline">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
