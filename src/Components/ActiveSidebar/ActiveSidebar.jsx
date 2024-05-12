/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveSidebar = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-sidebar" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveSidebar;
