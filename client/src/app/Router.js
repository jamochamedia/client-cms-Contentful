import React from "react";
import { Switch, Route } from "react-router-dom";
import { checkAdmin, checkEditor, checkClient } from "../utils/Auth/Auth";

import Home from "./routes/Home";
import AdminHome from "./routes/Admin/AdminHome";
import EditorHome from "./routes/Editor/EditorHome";
import LinkedIn from "./routes/LinkedIn/LinkedIn";
import LinkedInPost from "./routes/LinkedIn/LinkedInPost";
import Clients from "./routes/Clients/Clients";
import ClientProfile from "./routes/Clients/ClientProfile";
import Invoices from "./routes/Invoices/Invoices";
import Writers from "./routes/Writers/Writers";
import WriterProfile from "./routes/Writers/WriterProfile";
import AuthHandler from "../app/components/Auth/AuthHandler";
import Login from "./routes/Auth/Login";
import Verify from "./routes/Auth/Verify";
import Analytics from "./routes/Analytics/Analytics";

const Router = () => (
  <Switch>
    {/* Login Routes */}
    <Route exact path="/auth-handler" component={AuthHandler} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/verify" component={Verify} />

    {/* Specifc Entry Pages */}
    <Route exact path="/clients/:clientprofileid" component={ClientProfile} />
    <Route exact path="/linkedin/:linkedinpostid" component={LinkedInPost} />
    <Route exact path="/writers/:writerid" component={WriterProfile} />

    <Route exact path="/analytics/:analyticsId" component={Analytics} />

    {/* Clients List */}
    <Route
      exact
      path="/clients"
      render={() => checkAdmin() && <Route component={Clients} />}
    />

    {/* Invoice List */}
    <Route
      exact
      path="/invoices"
      render={() => checkAdmin() && <Route component={Invoices} />}
    />

    {/* LinkedIn List */}
    <Route
      exact
      path="/linkedin"
      render={() => checkAdmin() && <Route component={LinkedIn} />}
    />

    {/* Writer List */}
    <Route
      exact
      path="/writers"
      render={() => checkEditor() && <Route component={Writers} />}
    />

    {/* Client Home */}
    <Route
      exact
      path="/"
      render={() => checkClient() && <Route component={Home} />}
    />

    {/* Admin Home */}
    <Route
      exact
      path="/admin"
      render={() => checkAdmin() && <Route component={AdminHome} />}
    />

    {/* Editor Home */}
    <Route
      exact
      path="/editor"
      render={() => checkEditor() && <Route component={EditorHome} />}
    />
  </Switch>
);

export default Router;
