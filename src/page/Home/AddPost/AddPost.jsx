import { useState } from "react";
import UseSingleUser from "../../../Hooks/UseSingleUser";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const [fileName, setFileName] = useState("");
  const [loggedUser] = UseSingleUser();
  //   console.log(loggedUser);
  const imageToken = import.meta.env.VITE_image_token;
  const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  //   console.log(imgbbUrl);

  //   for useform
  const { register, handleSubmit, reset } = useForm();

  //get the image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  const onSubmit = () => {};
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
      <div className=" my-[3%] w-full  ">
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
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="inputFile"
              onChange={handleFileChange}
            />
            <label
              htmlFor="inputFile"
              className="inline-block px-6 py-2 bg-sky-500 text-white font-semibold rounded cursor-pointer hover:bg-sky-600"
            >
              Choose File
            </label>
            <span className=" text-slate-600 font-semibold text-base ml-5">
              {fileName}
            </span>
          </div>
          <input
            className="blue-btn cursor-pointer font-bold absolute bottom-0 right-0"
            type="submit"
            value="Post"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
