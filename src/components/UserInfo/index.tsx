import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as A from "store/actions";
import { selectUser } from "store/selectors";
import { routes } from "App";
import "./UserInfo.css";

type Props = {
  avatar: string;
  email: string;
  name: string;
};

const UserInfo = () => {
  const user = useSelector(selectUser);

  if (user === null) {
    return null;
  }
  //const UserInfo: React.FC<Props> = (props) => {
  //  const { avatar, email, name } = props;
  const avatar = "";
  const email = "email@mail.com";
  const name = "Name";

  //<img src="/ava.jpg" alt="image" />

  const source = `data:image/gif;base64,${avatar}`;

  //React.useEffect(() => {}, []);

  return (
    <div className={"userInfo"}>
      <div className={"userInfo_container"}>
        <span className={"userInfo_name"}>{name}</span>
        <span className={"userInfo_email"}>{email} </span>
      </div>
      <img className={"userInfo_img"} src={"/ava.jpg"} />
    </div>
  );
};

export default UserInfo;

//<img className={"userInfo_img"} src={source} />
