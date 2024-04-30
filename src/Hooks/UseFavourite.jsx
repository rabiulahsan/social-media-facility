import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const UseSingleUser = () => {
  const [favouriteData, setFavouriteData] = useState([]);
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/favourites?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setFavouriteData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);
  // console.log(loggedUser);
  return [favouriteData, isLoading];
};

export default UseSingleUser;
