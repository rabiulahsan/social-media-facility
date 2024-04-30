import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/login">login</Link>
      </button>
      <button>
        <Link to="/signup">sign up</Link>
      </button>
    </div>
  );
};

export default Home;
