import { useEffect, useState } from "react";
import useAuth from "./UseAuth";

const UseSingleUser = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);
  return [loggedUser, isLoading];
};

export default UseSingleUser;
