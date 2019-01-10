import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
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
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faBriefcase, faHome, faLock, faSignInAlt, faEnvelope);

const store = configureStore();
store.dispatch(loadContent());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();