import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "pages/Auth/Auth";
import SignUp from "pages/SignUp/SignUp";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Auth,
  },
  {
    path: "/signUp",
    component: SignUp,
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
