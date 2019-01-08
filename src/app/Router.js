import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { userHasScopes } from "../utils/Auth/Auth";

import Home from "./routes/Home";
import AdminHome from "./routes/Admin/AdminHome";
import EditorHome from "./routes/Editor/EditorHome";
import LinkedIn from "./routes/LinkedIn";
import LinkedInPost from "./routes/LinkedIn/LinkedInPost";
import Clients from "./routes/Clients";
import ClientProfile from "./routes/Clients/ClientProfile";
import Invoices from "./routes/Invoices";
import InvoicePage from "./routes/Invoices/InvoicePage";
import Writers from "./routes/Writers";
import WriterProfile from "./routes/Writers/WriterProfile";
import AuthHandler from "./routes/Auth/AuthHandler";
import Login from "./routes/Auth/Login";
import Verify from "./routes/Auth/Verify";

const Router = () => (
  <Switch>
    {/* Login Routes */}
    <Route exact path="/auth-handler" component={AuthHandler} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/verify" component={Verify} />
    <Route exact path="/linkedin" component={LinkedIn} />
    <Route exact path="/linkedin/:linkedinpostid" component={LinkedInPost} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/clients/:clientprofileid" component={ClientProfile} />
    <Route exact path="/writers" component={Writers} />
    <Route exact path="/writers/:writerid" component={WriterProfile} />
    <Route exact path="/invoices" component={Invoices} />
    <Route exact path="/invoices/:invoiceid" component={InvoicePage} />
    <Route exact path="/client-invoices/:invoiceid" component={InvoicePage} />

    <Route exact path="/" component={Home} />

    {/* Admin Home */}
    <Route
      exact
      path="/admin"
      render={() =>
        !userHasScopes(["admin:all"]) ? (
          <Redirect to="/" />
        ) : (
          <Route component={AdminHome} />
        )
      }
    />

    {/* Editor Home */}
    <Route
      exact
      path="/editor"
      render={() =>
        !userHasScopes(["role:editor"]) ? (
          <Redirect to="/" />
        ) : (
          <Route component={EditorHome} />
        )
      }
    />
  </Switch>
);

export default Router;
