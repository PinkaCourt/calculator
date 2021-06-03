import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/selectors";

import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import { getData } from "utils";
import { Data } from "store/types";

import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = React.useState<Data[]>([]);

  const user = useSelector(selectUser);

  React.useEffect(() => {
    if (!user) {
      return;
    }
    const cookie = document.cookie;
    console.log("cookie", document.cookie);
    getData(user.email, user.accessToken).then((data) => setData(data.items));
  }, [user]);

  console.log("data", data);

  return (
    <div className="dashboard">
      <Header />
      <div className="body_container">
        <Sidebar />
        <div className="dashboard_data_container">
          <Content data={data} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
