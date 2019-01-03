import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, NavbarBrand, Navbar, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { logout, areAuthItemsSet } from "../../utils/Auth/Auth";

const textStyle = {
  color: "white",
  textDecoration: "none",
  "& a:focus": {
    textDecoration: "none"
  },
  "& a:hover": {
    textDecoration: "none"
  },
  "& a:visited": {
    textDecoration: "none"
  },
  "& a:link": {
    textDecoration: "none"
  },
  "& a:active": {
    textDecoration: "none"
  }
};

const NavStyle = {
  backgroundColor: "#292f36"
};

const white = {
  color: "white"
};

class Header extends React.Component {
  render() {
    return (
      <Navbar style={NavStyle}>
        <Container fluid>
          <Row noGutters>
            <NavbarBrand style={textStyle} href="/">
              Jamocha Dashboard
            </NavbarBrand>
            {areAuthItemsSet() && (
              <NavLink style={white} onClick={() => logout()}>
                <FontAwesomeIcon icon="sign-in-alt" /> Logout
              </NavLink>
            )}
            {!areAuthItemsSet() && (
              <Link to="./login">
                <NavLink style={white}>
                  <FontAwesomeIcon icon="sign-in-alt" /> Login
                </NavLink>
              </Link>
            )}
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
