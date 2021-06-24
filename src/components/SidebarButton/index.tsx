import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as A from "store/actions";
import "./SidebarButton.css";

const SidebarButton = () => {
  const [openList, setopenList] = React.useState(false);
  const [location, setLocation] = React.useState("Dashboard");

  const dispatch = useDispatch();

  const toggleList = () => {
    setopenList((prev) => !prev);
  };

  const toggleLocation = () => {};

  const logout = () => {
    dispatch(A.authorizationUser({ login: "", password: "" }));
  };

  return (
    <>
      <button className={"sidebar_button"} onClick={toggleList}>
        {location}
      </button>
      {openList && (
        <div className={"sidebar_list"}>
          <NavLink
            to="/dashboard"
            className={"sidebar_list-link"}
            activeStyle={{
              fontWeight: "bold",
            }}
            onClick={toggleLocation}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className={"sidebar_list-link"}
            onClick={toggleLocation}
          >
            Profile
          </NavLink>
          <NavLink to="/" className={"sidebar_list-link"} onClick={logout}>
            Logout
          </NavLink>
        </div>
      )}
    </>
  );
};

export default SidebarButton;
