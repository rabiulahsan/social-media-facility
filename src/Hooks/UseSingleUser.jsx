import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const UseSingleUser = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://social-facilites-server.vercel.app/users?email=${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);
  // console.log(loggedUser);
  return [loggedUser, isLoading];
};

export default UseSingleUser;
