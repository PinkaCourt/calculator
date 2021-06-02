import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className={"sidebar_container"}>
      <div className={"sidebar_link-container"}>
        <NavLink className={"sidebar_link"} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={"sidebar_link"} to="/profile">
          Profile
        </NavLink>
      </div>
      <NavLink className={"sidebar_link_logout"} to="/">
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
