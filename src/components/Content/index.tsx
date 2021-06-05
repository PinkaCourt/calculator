import React from "react";
import { useSelector } from "react-redux";

import { selectData } from "store/selectors";
import Widget from "components/Widget";
import Chart from "components/Chart";
import "./Content.css";

const toAverage = (data: string[]) => {
  const { length } = data;
  const sum = data.reduce((acc, value) => acc + parseFloat(value), 0);
  const average = (sum / length).toFixed(2);

  return average;
};

const toNormalize = (value: string) => {
  return parseFloat(value).toFixed(2);
};

const startPeriod = new Date().setMonth(new Date().getMonth() - 1);
const endPeriod = Date.now();

const Content = () => {
  const data = useSelector(selectData);

  if (data.length === 0) {
    return null;
  }

  const monthlyData = data.filter(
    (mnt) => mnt.date > startPeriod && mnt.date < endPeriod
  );

  const lastDatas = monthlyData[0];

  const widgets = [
    {
      name: "DICK SIZE, cm",
      data: toNormalize(lastDatas.ds),
      average: toAverage(monthlyData.map((e) => e.ds)),
    },
    {
      name: "ANAL SIZE, cm",
      data: toNormalize(lastDatas.ans),
      average: toAverage(monthlyData.map((e) => e.ans)),
    },
    {
      name: "WILL TO LIVE, %",
      data: toNormalize(lastDatas.wtl),
      average: toAverage(monthlyData.map((e) => e.wtl)),
    },
  ];

  return (
    <div className={"content_container"}>
      {widgets.map((widget) => (
        <Widget
          key={widget.name}
          name={widget.name}
          data={widget.data}
          average={widget.average}
        />
      ))}
      <Chart />
    </div>
  );
};

export default Content;
