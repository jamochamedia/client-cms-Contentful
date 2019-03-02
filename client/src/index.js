import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
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

const httpLink = new HttpLink({
  uri: "http://localhost:4000/"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem("idToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
