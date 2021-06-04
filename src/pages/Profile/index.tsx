import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import UploadContent from "components/UploadContent";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <Header />
      <div className="body_container">
        <Sidebar />
        <div className="profile_data_container">
          <UploadContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
