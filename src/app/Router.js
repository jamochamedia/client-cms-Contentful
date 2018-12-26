import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import LinkedIn from "./routes/LinkedIn";
import LinkedInPost from "./routes/LinkedIn/LinkedInPost";
import Clients from "./routes/Clients";
import ClientProfile from "./routes/Clients/ClientProfile";
import Invoices from "./routes/Invoices";
import InvoicePage from "./routes/Invoices/InvoicePage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/linkedin" component={LinkedIn} />
    <Route exact path="/linkedin/:linkedinpostid" component={LinkedInPost} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/clients/:clientprofileid" component={ClientProfile} />
    <Route exact path="/invoices" component={Invoices} />
    <Route exact path="/invoices/:invoiceid" component={InvoicePage} />
  </Switch>
);

export default Router;
