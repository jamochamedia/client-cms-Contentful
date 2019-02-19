import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// Redux Store
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { loadContent } from "./store/data/Content";

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

const store = configureStore();
store.dispatch(loadContent());

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
