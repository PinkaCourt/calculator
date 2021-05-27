import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "pages/Auth/Auth";
import Sungup from "pages/Sungup/Sungup";

const routes = [
  {
    path: "/",
    exact: true,
    component: Auth,
  },
  {
    path: "/sungup",
    component: Sungup,
  },
];

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
