import { useRef, useState } from "react";
import UseSingleUser from "../../../Hooks/UseSingleUser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import dayjs from "dayjs";

const AddPost = () => {
  const [fileName, setFileName] = useState("");
  const [loggedUser] = UseSingleUser();
  const fileInputRef = useRef(null);
  //   console.log(loggedUser);

  const imageToken = import.meta.env.VITE_image_token;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  //   for useform
  const { register, handleSubmit, reset } = useForm();

  //get the image and display the file name
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = (data) => {
    // posting to imagebb for getting the image url
    const imageData = new FormData();
    imageData.append("image", fileInputRef.current.files[0]);
    fetch(imageHostingUrl, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          // creating data for post body which will be sent to database
          const imgUrl = imgRes.data.display_url;

          //getting ther time
          const now = dayjs();
          const postBody = {
            userName: loggedUser?.name,
            userEmail: loggedUser?.email,
            userImage: loggedUser?.image,
            postDesc: data.postDesc,
            likes: 0,
            postImage: imgUrl,
            postedTime: now,
          };
          console.log(postBody);

          //   posting it to database
          fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postBody),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                setFileName("");
                Toast.fire({
                  icon: "success",
                  title: "Post has been created successfully",
                });
              }
            });
        }
      });
  };
  return (
    <div className="bg-white p-5 rounded-lg mx-[30%] my-[5%]">
      {/* details of user  */}
      <div className="flex items-center gap-x-3">
        <img
          src={loggedUser?.image}
          alt=""
          className="h-[30px] w-[30px] rounded-full border border-slate-500"
        />
        <p className="text-lg font-semibold text-slate-600">
          {loggedUser?.name}
        </p>
      </div>

      {/* posting section  */}
      <div className=" my-[4%] w-full  ">
        <form onSubmit={handleSubmit(onSubmit)} className="relative w-full  ">
          {/* post description  */}
          <div className="form-control w-full  flex justify-center  items-center mb-[4%]">
            <textarea
              className="textarea textarea-bordered input-style"
              placeholder="Write what's on your mind"
              {...register("postDesc")}
            ></textarea>
          </div>

          {/* posting image  */}
          <div className="flex justify-around items-center">
            <div className="relative">
              <input
                type="file"
                className="hidden"
                id="inputFile"
                onChange={handleFileChange}
                ref={fileInputRef}
                required
              />
              <label
                htmlFor="inputFile"
                className="inline-block px-6 py-2 bg-sky-500 text-white font-semibold rounded cursor-pointer hover:bg-sky-600"
              >
                Choose a picture
              </label>

              {/* displayeing icon for file chosen or not  */}
              {fileName && (
                <img
                  src="/mark.png"
                  alt=""
                  className="w-[30px] h-[30px] object-cover inline mx-5"
                />
              )}
              {/* <span className=" text-slate-600 font-semibold text-base ">
              {fileName}
            </span> */}
            </div>
            <input
              className="blue-btn cursor-pointer font-bold "
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
