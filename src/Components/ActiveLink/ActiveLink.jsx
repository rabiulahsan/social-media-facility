/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-sky-600  font-bold" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
