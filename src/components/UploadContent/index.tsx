import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "store/selectors";
import "./UploadContent.css";

const UploadContent = () => {
  const [name, setName] = React.useState("");

  const user = useSelector(selectUser);

  /*  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };*/

  const handleNameChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };

  return (
    <div className="upload_container">
      <div className="chouse_container">
        <img className="upload_img" src="/ava.jpg" alt="dick pic" />
        <label className="chouse_link">
          <input
            className="chouse_button"
            type="file"
            accept="image/jpeg,image/png"
          />
          Upload new
        </label>
        <label className="upload_label">
          email
          <input className="upload_email" value={user?.email} readOnly />
        </label>
        <label className="upload_label">
          name
          <input
            className="upload_name"
            onChange={handleNameChange}
            autoComplete="on"
            value={name}
          />
        </label>
      </div>
      <button className="upload_button"> Upload</button>
    </div>
  );
};

export default UploadContent;
