import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import theme from "theme";

const useStyles = makeStyles({
  input: {
    width: theme.spacing(50),
    margin: theme.spacing(1),
  },
});

type Props = {
  updateFilter: (e: string) => void;
};

const Search: React.FC<Props> = ({ updateFilter }) => {
  const styles = useStyles();

  return (
    <div>
      <Input
        color={"primary"}
        className={styles.input}
        onChange={(event) => updateFilter(event.target.value)}
      />
      <Button variant="outlined" color="primary">
        SEARCH
      </Button>
    </div>
  );
};

export default Search;
