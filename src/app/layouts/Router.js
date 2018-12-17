import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import LinkedIn from "./routes/LinkedIn";
import LinkedInPost from "../layouts/components/LinkedIn/LinkedInPost";
import Clients from "./routes/Clients";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/linkedin" component={LinkedIn} />
    <Route path="/linkedin/:linkedInPost" component={LinkedInPost} />
    <Route exact path="/clients" component={Clients} />
  </Switch>
);

export default Router;
