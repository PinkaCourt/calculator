import React from "react";
import { useSelector } from "react-redux";

import { selectData } from "store/selectors";
import * as T from "store/types";
import "./Chart.css";

const initIndent = 80;
const step = 10;

const startPeriod = new Date().setMonth(new Date().getMonth() - 4);
const endPeriod = Date.now();

const canvasHeight = 300; //current && current.height;
const canvasWidth = 512; //current && current.width;

const toGraf = (
  ctx: CanvasRenderingContext2D,
  array: number[],
  height: number
) => {
  ctx.beginPath();
  ctx.moveTo(initIndent, height - initIndent);

  array.reduce((accumulator, currentValue) => {
    ctx.lineTo(accumulator, height - initIndent - currentValue);
    return (accumulator = accumulator + step);
  }, initIndent);

  ctx.stroke();
  ctx.closePath();
};

const Chart = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const data = useSelector(selectData);
  const dataForFourMonths = data.filter(
    (mnt) => mnt.date > startPeriod && mnt.date < endPeriod
  );

  // усредняем данные за день

  const averageDSbyMonth = (ar: T.Data[]) => {
    let newData = [];
    let accumulatorData = 0;
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
      if (i === 0) {
        accumulatorData = parseFloat(ar[i].ds);
        count = 1;
      } else {
        const thisDate = ar[i].date;
        const prevDate = ar[i - 1].date;

        const thisDay = new Date(thisDate).getDate();
        const prevDay = new Date(prevDate).getDate();

        const thisMonth = new Date(thisDate).getMonth();
        const prevMonth = new Date(prevDate).getMonth();

        if (thisDay === prevDay && thisMonth === prevMonth) {
          accumulatorData = accumulatorData + parseFloat(ar[i].ds);
          count = count + 1;
        } else {
          newData.push({
            ds: accumulatorData / count,
            month: prevMonth,
            day: prevDay,
          });
          accumulatorData = 0;
          count = 0;
        }
      }
    }

    return newData;
  };

  React.useEffect(() => {
    const { current } = canvasRef;
    const ctx = current && current.getContext("2d");

    if (ctx == null) {
      return;
    }
    const Y = [
      { text: "20", x: 40, y: 1 * 80 + 60 },
      { text: "10", x: 40, y: 2 * 80 + 60 },
      { text: "0", x: 40, y: 3 * 80 + 60 },
    ];
    ctx.fillStyle = "black";
    ctx.lineWidth = 5.0;
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvasHeight);
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.stroke();
    ctx.closePath();

    const igogo = averageDSbyMonth(dataForFourMonths).slice().reverse();
    console.log("igogo", igogo);
    toGraf(
      ctx,
      igogo.map((e) => e.ds),
      canvasHeight
    );
    Y.map((e) => ctx.fillText(e.text, e.x, e.y));
  }, [dataForFourMonths]);

  return (
    <div className="chart">
      <span className="canvas_legend"> CLIENTS </span>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};

export default Chart;
