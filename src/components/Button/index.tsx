import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button as ButtonMui } from "@material-ui/core/";
import { Buttons } from "components/Keyboard";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(10),
    width: "100%",
  },
  operation: {
    background: "pink",
  },
  input: {
    background: "blue",
  },
}));

type Props = {
  type: Buttons;
  value: string;
  handleClick: (v: string, t: Buttons) => void;
};
const Button: React.FC<Props> = ({ type, value, handleClick }) => {
  const styles = useStyles();
  return (
    <ButtonMui
      variant="outlined"
      className={styles.root}
      onClick={() => handleClick(value, type)}
    >
      {value}
    </ButtonMui>
  );
};

export default Button;
