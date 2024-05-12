/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveSidebar = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "hover:bg-slate-200" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveSidebar;
