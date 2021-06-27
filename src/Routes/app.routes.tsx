import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default AppRoutes;
