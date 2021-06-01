import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import { getData } from "utils";
import "./Dashboard.css";

const Dashboard = () => {
  //const data = getData()

  return (
    <div className={"dashboard"}>
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
