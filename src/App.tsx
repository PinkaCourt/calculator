import React from "react";
import "./App.css";

function App() {
  const [img, setImg] = React.useState(0);

  const sliderRef = React.useRef<HTMLDivElement>(null);

  const back = () => {
    changeImg(-1);
  };

  const next = () => {
    changeImg(+1);
  };

  const changeImg = (arg: number) => {
    setImg((prevState) => {
      const newImg = prevState + arg;
      switch (newImg) {
        case -1: {
          return 2;
        }
        case 3: {
          return 0;
        }
      }

      return newImg;
    });
  };

  React.useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const width = sliderRef.current.getBoundingClientRect().width;
    sliderRef.current.scrollLeft = img * width;
  }, [img]);

  return (
    <div className="App">
      <button onClick={back}>Назад </button>
      <button onClick={next}>Вперед </button>

      <div className="slider" ref={sliderRef}>
        <img src={`img/1.jpg`} />
        <img src={`img/2.jpg`} />
        <img src={`img/3.jpg`} />
      </div>
    </div>
  );
}

export default App;
