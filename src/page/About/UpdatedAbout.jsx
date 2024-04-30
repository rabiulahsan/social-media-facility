import Swal from "sweetalert2";
// import PageBanner from "../../Components/PageBanner/PageBanner";
// import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// import UseAuth from "../../Hook/UseAuth";
// import Footer from "../../Shared/Footer/Footer";
// import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Navbar from "../../Shared/Navbar/Navbar";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Footer from "../../Shared/Footer/Footer";
import PageBanner from "../../Components/PageBanner/PageBanner";

const UpdatedAbout = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser(data);
      })
      .catch((error) => console.error(error));
  }, [user]);

  const details = {
    image:
      "https://brand.cornell.edu/assets/images/photography/UP_2017_1304_147_select.jpg",
    name: "Update Your Profile",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = (data) => {
    const userBody = {
      ...data,
    };
    console.log(userBody);

    fetch(
      `https://college-facilities-server.vercel.app/users/${loggedUser?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userBody),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          reset();
          navigate("/profile");
          Toast.fire({
            icon: "success",
            title: "Profile update successfully",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Update Profile"></SectionTitle>
      <div className="mx-[8%] mb-[6%]">
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {/* name  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={loggedUser?.name}
                placeholder="Name"
                {...register("name", { required: true, maxLength: 40 })}
                className="input-style"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            {/* email  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Email"
                value={user?.email}
                {...register("email", { required: true, maxLength: 25 })}
                className="input-style"
              />
            </div>

            {/* College  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">College</span>
              </label>

              <input
                type="text"
                placeholder="College Name"
                defaultValue={loggedUser?.college_name}
                {...register("college_name", {
                  required: true,
                  maxLength: 40,
                })}
                className="input-style"
              />

              {errors.college && (
                <span className="text-red-600">College is required</span>
              )}
            </div>

            {/* address  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Address</span>
              </label>
              <textarea
                className="textarea textarea-bordered input-style"
                placeholder="Address"
                defaultValue={loggedUser?.address}
                {...register("address", { required: true })}
              ></textarea>
              {errors.address && (
                <span className="text-red-600">address is required</span>
              )}
            </div>
          </div>
          <input
            className="blue-btn cursor-pointer font-bold absolute bottom-0 right-0"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdatedAbout;
