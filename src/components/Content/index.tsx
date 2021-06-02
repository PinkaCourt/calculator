import React from "react";
import Widget, { Props } from "components/Widget";
import Chart from "components/Chart";
import "./Content.css";

const Content = () => {
  const fakeData = Array(3).fill(
    Object.assign({
      name: "DICK SIZE, cm",
      data: "12.1",
      average: "-1.2",
    })
  );

  console.log("fakeData", fakeData);

  return (
    <div className={"content_container"}>
      {fakeData.map((data: Props) => (
        <Widget name={data.name} data={data.data} average={data.average} />
      ))}

      <Chart />
    </div>
  );
};

export default Content;
