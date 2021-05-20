import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "components/Container";
import Search from "components/Search";
import { Beer } from "components/BeerCard";
import theme from "theme";

const baseUrl = "https://api.punkapi.com/v2/beers";
const pageCountUrl = baseUrl + "?page=1&per_page=9";
const searchUrl = baseUrl + "?beer_name=";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
});

const App: React.FC = () => {
  const styles = useStyles();

  const [beers, setBeers] = React.useState<Beer[]>([] as Beer[]);
  const [filter, setFilter] = React.useState<string>("");

  const updateFilter = (e: string) => {
    setFilter(e);
  };

  React.useEffect(() => {
    const url = filter.length === 0 ? pageCountUrl : searchUrl + filter;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setBeers(json);
      })
      .catch(console.log);
  }, [filter]);

  return (
    <div className={styles.root}>
      <Search updateFilter={updateFilter} />
      <Container beers={beers} />
    </div>
  );
};

export default App;
