import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "pages/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
