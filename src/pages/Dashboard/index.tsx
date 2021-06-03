import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="body_container">
        <Sidebar />
        <div className="dashboard_data_container">
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
