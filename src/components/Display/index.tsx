import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "green",
    height: theme.spacing(10),
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,
  },
}));

type Props = {
  value: string;
};
const Display: React.FC<Props> = ({ value }) => {
  const styles = useStyles();

  return <div className={styles.root}> {value}</div>;
};

export default Display;
