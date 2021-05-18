import React from "react";
import Button from "components/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: theme.spacing(1),
    background: "pink",
    placeItems: "center",
  },
}));

export enum Buttons {
  VALUE,
  SUM,
  MINUS,
  MULT,
  DIVISION,
  EQUALLY,
  CLEAR,
}

const buttons = [
  { type: Buttons.VALUE, value: "1" },
  { type: Buttons.VALUE, value: "2" },
  { type: Buttons.VALUE, value: "3" },
  { type: Buttons.SUM, value: "+" },
  { type: Buttons.VALUE, value: "4" },
  { type: Buttons.VALUE, value: "5" },
  { type: Buttons.VALUE, value: "6" },
  { type: Buttons.MINUS, value: "-" },
  { type: Buttons.VALUE, value: "7" },
  { type: Buttons.VALUE, value: "8" },
  { type: Buttons.VALUE, value: "9" },
  { type: Buttons.MULT, value: "*" },
  { type: Buttons.VALUE, value: "." },
  { type: Buttons.VALUE, value: "0" },
  { type: Buttons.EQUALLY, value: "=" },
  { type: Buttons.DIVISION, value: "/" },
  { type: Buttons.CLEAR, value: "C" },
];

type Props = {
  handleChange: (str: string, type: Buttons) => void;
};
const Keyboard: React.FC<Props> = ({ handleChange }) => {
  const styles = useStyles();

  const handleClick = (value: string, type: Buttons) => {
    handleChange(value, type);
  };

  return (
    <div className={styles.root}>
      {buttons.map((e) => (
        <Button
          key={e.value}
          value={e.value}
          type={e.type}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Keyboard;
