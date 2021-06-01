import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Sidebar;
