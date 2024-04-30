/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import SkeletonCard from "../Components/SkeletonCard/SkeletonCard";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        <SkeletonCard number={16}></SkeletonCard>;
      </div>
      // setLoading(false);
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
