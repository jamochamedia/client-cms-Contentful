import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBriefcase,
  faHome,
  faLock,
  faSignInAlt,
  faEnvelope,
  faListOl,
  faCheckSquare,
  faSquare,
  faPaperPlane,
  faUserCheck,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faBriefcase,
  faHome,
  faLock,
  faSignInAlt,
  faEnvelope,
  faListOl,
  faCheckSquare,
  faSquare,
  faPaperPlane,
  faUserCheck,
  faCommentAlt
);

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
