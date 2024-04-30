import useAuth from "../../Hooks/UseAuth";

const PostCard = ({ post }) => {
  const { user } = useAuth();
  return (
    <div className="bg-white rounded-3xl p-3">
      <div className="">
        <img src={user?.photoURL} alt="" />
        <p></p>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default PostCard;
