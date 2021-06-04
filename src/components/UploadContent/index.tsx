import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "store/selectors";
import "./UploadContent.css";

const UploadContent = () => {
  //const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const user = useSelector(selectUser);
  /*
  if (user === null) {
    return null;
  }
*/

  /*  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };*/

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };
  //autoComplete
  //readOnly
  console.log("user", user);
  return (
    <div className={"upload_container"}>
      <img className={"upload_img"} src={"/ava.jpg"} alt={"dick pic"} />

      <label className={"download_link"}>
        <input
          className={"download_button"}
          type="file"
          accept="image/jpeg,image/png"
        />
        Upload new
      </label>
      <input className="upload_email" value={user?.email} readOnly />
      <input onChange={handleNameChange} autoComplete="on" />
      <button> Upload</button>
    </div>
  );
};

export default UploadContent;
