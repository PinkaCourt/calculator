import React from "react";
import { useSelector } from "react-redux";

import { selectData } from "store/selectors";
import Widget from "components/Widget";
import Chart from "components/Chart";
import "./Content.css";

const toAverage = (data: string[]) => {
  const quantity = data.length;

  const sum = data.reduce((acc, value) => acc + parseFloat(value), 0);

  const average = (sum / quantity).toFixed(2);

  return average;
};

const Content = () => {
  const data = useSelector(selectData);

  if (data.length === 0) {
    return null;
  }

  const startPeriod = new Date().setMonth(new Date().getMonth() - 1);
  const endPeriod = Date.now();

  const monthlyData = data.filter(
    (mnt) => mnt.date > startPeriod && mnt.date < endPeriod
  );

  const averageDS = toAverage(monthlyData.map((e) => e.ds));
  const averageAS = toAverage(monthlyData.map((e) => e.ans));
  const averageWL = toAverage(monthlyData.map((e) => e.wtl));

  /*
  const toWidget = ()=> {

  }*/

  const widgetDS = {
    name: "DICK SIZE, cm",
    data: monthlyData[0].ds,
    average: averageDS,
  };
  const widgetAS = {
    name: "ANAL SIZE, cm",
    data: monthlyData[0].ans,
    average: averageAS,
  };

  const widgetWL = {
    name: "DICK SIZE, cm",
    data: monthlyData[0].wtl,
    average: averageWL,
  };

  const arr = [widgetDS, widgetAS, widgetWL];

  return (
    <div className={"content_container"}>
      <Widget
        name={widgetDS.name}
        data={widgetDS.data}
        average={widgetDS.average}
      />
      <Chart />
    </div>
  );
};

export default Content;
