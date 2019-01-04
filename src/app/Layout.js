import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Router from "./Router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Site from "./components/Site";

import { renewSession } from "../utils/Auth/Auth";

class Layout extends React.Component {
  //TODO: renew session when using app. Correct?
  componentDidMount() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render(props) {
    return (
      <Site>
        <Helmet title="Jamocha Client CMS" />
        <Header />
        <Content>
          <Router />
        </Content>
        <Footer />
      </Site>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.func
};
