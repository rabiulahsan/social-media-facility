import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      {!user ? (
        <>
          <button>
            <Link to="/login">login</Link>
          </button>
          <button>
            <Link to="/signup">sign up</Link>
          </button>
        </>
      ) : (
        <button> logOut</button>
      )}
    </div>
  );
};

export default Home;
