import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import LinkedIn from "./routes/LinkedIn";
import LinkedInPost from "../layouts/components/LinkedIn/LinkedInPost";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/linkedin" component={LinkedIn} />
    <Route path="/linkedin/:linkedInPost" component={LinkedInPost} />
  </Switch>
);

export default Router;
