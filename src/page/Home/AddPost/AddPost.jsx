const AddPost = () => {
  const imageToken = import.meta.env.VITE_image_token;
  const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  console.log(imgbbUrl);
  return <div></div>;
};

export default AddPost;
