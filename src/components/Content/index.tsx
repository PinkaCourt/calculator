import React from "react";
import Widget from "components/Widget";
import Chart from "components/Chart";
import "./Content.css";
import { Data } from "store/types";

type Props = {
  data: Data[];
};

const Content: React.FC<Props> = (props) => {
  const { data } = props;

  if (data.length === 0) {
    return null;
  }

  const lastDS = data.map((e) => e.ds).shift();

  const lastAS = data.map((e) => e.ans).shift();

  //const lastMonth =

  console.log("lastDS", lastDS);
  console.log("lastAS", lastAS);

  const widgetDS = {
    name: "DICK SIZE, cm",
    data: lastDS,
    average: "-1.2",
  };
  const widgetAS = {
    name: "ANAL SIZE, cm",
    data: lastAS,
    average: "-1.2",
  };

  const widgetWL = {
    name: "DICK SIZE, cm",
    data: "12.1",
    average: "-1.2",
  };

  const arr = [widgetDS, widgetAS, widgetWL];

  return (
    <div className={"content_container"}>
      {arr.map((data) => (
        <Widget name={data.name} data={"kf"} average={data.average} />
      ))}

      <Chart />
    </div>
  );
};

export default Content;
