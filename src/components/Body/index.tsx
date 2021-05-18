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

  const handleChange = (str: string, type: Buttons) => {
    setValue((prevState) => {
      switch (
        type
        /* case Buttons.SUM: {
                
                return  `${parseInt(prevState)}`
            }
            case Buttons.MINUS: {
                return `${parseInt(prevState) - parseInt(str)}`}
            case Buttons.MULT: {}
            case  Buttons.DIVISION: {}
            case : {}
            case : {}*/
      ) {
      }
      return prevState + str;
    });
  };

  return (
    <div className={slyles.root}>
      <Display value={value} />
      <Keyboard handleChange={handleChange} />
    </div>
  );
};

export default Body;
