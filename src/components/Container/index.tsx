import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BeerCard, { Beer } from "components/BeerCard";
import theme from "theme";

type Props = {
  beers: Beer[];
};

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gap: theme.spacing(3),
  },
});

const Container: React.FC<Props> = ({ beers }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      {beers.map((b) => (
        <BeerCard key={b.id} beer={b} />
      ))}
    </div>
  );
};

export default Container;
