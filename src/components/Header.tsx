import React from "react";
import { useSelector } from "react-redux";

import { selectAuth } from "store/selectors";
import UserInfo from "components/UserInfo";
import Logo from "components/Logo";
import "components/Components.css";

const Header = () => {
  const auth = useSelector(selectAuth);

  return (
    <header className={"header"}>
      <Logo />
      {auth && <UserInfo />}
    </header>
  );
};

export default Header;
