import React from "react";
import { useSelector } from "react-redux";

import { selectAverageDatas } from "store/selectors";
import "./Chart.css";

const step = 10;

const initIndent = 80;
const initX = 2 * step;
const initY = 4 * step;

const canvasHeight = 300; //current && current.height;
const canvasWidth = 500; //current && current.width;

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

  const averageDatas = useSelector(selectAverageDatas);

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

    // начало рисования осей
    ctx.fillStyle = "black";
    ctx.lineWidth = 5.0;
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvasHeight);
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.stroke();
    ctx.closePath();
    //конец осей
    toGraf(
      ctx,
      averageDatas.map((e) => e.ds),
      canvasHeight
    );
    Y.map((e) => ctx.fillText(e.text, e.x, e.y));

    // стилизуем надпись
    ctx.fillStyle = "#666666";
    ctx.font = 'normal 24px "Roboto Mono"';
    ctx.fillText("CLIENTS", initX, initY);
  }, [averageDatas]);

  return (
    <div className="chart">
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};

export default Chart;
