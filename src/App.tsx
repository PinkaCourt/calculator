import React, { useEffect } from "react";
import shipUrl from "img/ship.png";

const degToRad = (n: number) => (n * Math.PI) / 180;

function drawImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  rotation: number
) {
  ctx.setTransform(0.3, 0, 0, 0.3, x, y);
  ctx.rotate(rotation);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);
}

type Coordinates = {
  x: number;
  y: number;
  rotation: number;
};

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [coordinates, setCoordinates] = React.useState<Coordinates>({
    x: 100,
    y: 100,
    rotation: 0,
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) {
      return;
    }

    const ship = (state: any) => {
      //ctx.save();
      ctx.restore();
      //ctx.clearRect(100, 100, width, height);
      const { x, y, rotation } = state;
      const img = new Image();
      img.src = shipUrl;
      img.onload = () => {
        ctx.drawImage(img, x, y, 100, 100);
        // drawImage(ctx, img, x, y, rotation);
        // drawImage(ctx, img, x, y, rotation);
      };
    };

    ship(coordinates);

    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyA": {
          setCoordinates((prevState) => {
            const { x } = prevState;
            const dif = x - 10;
            return { ...prevState, x: dif };
          });
          break;
        }
        case "KeyD": {
          setCoordinates((prevState) => {
            const { x } = prevState;
            const dif = x + 10;
            return { ...prevState, x: dif };
          });
          break;
        }
        case "KeyW": {
          setCoordinates((prevState) => {
            const { y } = prevState;
            const dif = y - 10;
            return { ...prevState, y: dif };
          });
          break;
        }
        case "KeyS": {
          setCoordinates((prevState) => {
            const { y } = prevState;
            const dif = y + 10;
            return { ...prevState, y: dif };
          });
          break;
        }
        case "KeySpace": {
          return;
        }
      }
    });
  }, [coordinates]);

  return <canvas ref={canvasRef} width="800px" height="800px" />;
}

export default App;
