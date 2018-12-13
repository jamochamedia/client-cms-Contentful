import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path='/linkedinpost' component={LinkedIn}/> */}
  </Switch>
);

export default Router;
