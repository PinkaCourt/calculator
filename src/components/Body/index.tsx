import React from "react";
import Display from "components/Display";
import Keyboard, { Buttons } from "components/Keyboard";
import { makeStyles } from "@material-ui/core/styles";
import theme from "theme";

const useStyles = makeStyles({
  root: {
    width: theme.spacing(55),
    height: theme.spacing(75),
    background: "red",
  },
});

type Props = {};
const Body: React.FC<Props> = () => {
  const slyles = useStyles();

  const [value, setValue] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [total, setTotal] = React.useState("");

  const handleChange = (str: string, type: Buttons) => {
    switch (type) {
      case Buttons.CLEAR: {
        setTotal("");
        setValue("");
        setOperation("");
        break;
      }
      case Buttons.EQUALLY: {
        setValue(total);
        setOperation("");
        break;
      }

      default:
        setValue((prevState) => prevState + str);
        break;
    }

    if (total === "") {
      setTotal(str);
    }

    if (type !== Buttons.VALUE) {
      setOperation(str);
    }

    if (operation !== "") {
      switch (operation) {
        case "+": {
          setTotal((prevState) => `${parseInt(prevState) + parseInt(str)}`);
          break;
        }
        case "-": {
          setTotal((prevState) => `${parseInt(prevState) - parseInt(str)}`);
          break;
        }
        case "*": {
          setTotal((prevState) => `${parseInt(prevState) * parseInt(str)}`);
          break;
        }
        case "/": {
          setTotal((prevState) => `${parseInt(prevState) / parseInt(str)}`);
          break;
        }
      }
      setOperation("");
    }
  };

  return (
    <div className={slyles.root}>
      <Display value={value} total={total} />
      <Keyboard handleChange={handleChange} />
    </div>
  );
};

export default Body;
