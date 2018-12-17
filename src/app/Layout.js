import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Router from "./Router";

import Header from "./layouts/components/Header";
import Footer from "./layouts/components/Footer";
import Content from "./layouts/components/Content";
import Site from "./layouts/components/Site";

const Layout = ({ children }) => (
  <Site>
    <Helmet title="Jamocha Client CMS" />
    <Header />
    <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.func
};
