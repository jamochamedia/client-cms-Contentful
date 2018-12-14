import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import LinkedIn from "./routes/LinkedIn";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path='/linkedin' component={LinkedIn}/>
  </Switch>
);

export default Router;
