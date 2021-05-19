import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "green",
    height: theme.spacing(10),
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,
  },
}));

type Props = {
  value: string;
  total: string;
};
const Display: React.FC<Props> = ({ value, total }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography variant="h4"> {value} </Typography>
      <Typography variant="body1"> {total}</Typography>
    </div>
  );
};

export default Display;
