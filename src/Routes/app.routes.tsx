import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sobre-nos" exact component={AboutUs} />
    <Route path="/formacao" exact component={Courses} />
    <Route path="/contato" exact component={Contact} />
  </Switch>
);

export default AppRoutes;
