import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "pages/Auth/Auth";
import SignUp from "pages/SignUp/SignUp";

export const routes = {
  auth: {
    path: "/",
    exact: true,
    component: Auth,
  },
  signUp: {
    path: "/signUp",
    exact: false,
    component: SignUp,
  },
};

function App() {
  return (
    <Router>
      <Switch>
        {Object.values(routes).map((route) => (
          <Route
            key={route.path}
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
