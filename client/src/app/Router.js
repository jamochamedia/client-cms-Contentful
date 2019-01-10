import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  areAuthItemsSet,
  checkAdmin,
  checkEditor,
  AdminSecured
} from "../utils/Auth/Auth";

import Home from "./routes/Home";
import AdminHome from "./routes/Admin/AdminHome";
import EditorHome from "./routes/Editor/EditorHome";
import LinkedIn from "./routes/LinkedIn";
import LinkedInPost from "./routes/LinkedIn/LinkedInPost";
import Clients from "./routes/Clients";
import ClientProfile from "./routes/Clients/ClientProfile";
import Invoices from "./routes/Invoices";
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

    <Route exact path="/linkedin/:linkedinpostid" component={LinkedInPost} />
    <Route exact path="/clients/:clientprofileid" component={ClientProfile} />
    <Route exact path="/writers/:writerid" component={WriterProfile} />

    {/* Clients List */}
    <AdminSecured exact path="/clients" component={Clients} />

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
      render={() =>
        !areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <Route component={Home} />
        )
      }
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
