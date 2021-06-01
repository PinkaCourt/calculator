import React from "react";
import Widget from "./Widget";
import Chart from "./Chart";
import "./Content.css";

const Content = () => {
  return (
    <div className={"contentContainer"}>
      <div className={"widgetContainer"}>
        <Widget />
        <Widget />
        <Widget />
      </div>
      <Chart />
    </div>
  );
};

export default Content;
