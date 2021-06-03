import React from "react";
import Logo from "components/Logo";
import UserInfo from "components/UserInfo";
import "components/Components.css";

const Header = () => {
  return (
    <header className={"header"}>
      <Logo />
      <UserInfo />
    </header>
  );
};

export default Header;
