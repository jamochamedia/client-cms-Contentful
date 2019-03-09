import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
// import { createHttpLink } from "apollo-link-http";
// import { setContext } from "apollo-link-context";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";

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
  faCommentAlt,
  faChartArea,
  faPencilAlt,
  faBinoculars,
  faCalendarAlt,
  faPenSquare
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
  faCommentAlt,
  faChartArea,
  faPencilAlt,
  faBinoculars,
  faCalendarAlt,
  faPenSquare
);

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

// const httpLink = createHttpLink({
//   uri: "http://localhost:4000/"
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("idToken");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ""
//     }
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router>
//       <App />
//     </Router>
//   </ApolloProvider>,
//   document.getElementById("root")
// );
