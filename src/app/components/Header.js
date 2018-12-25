import React from "react";
//Todo add NavLink when ready
import { Container, Row, NavbarBrand, Navbar } from "reactstrap";

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

class Header extends React.Component {
  render() {
    return (
      <Navbar style={NavStyle}>
        <Container fluid>
          <Row noGutters>
            <NavbarBrand style={textStyle} href="/">
              Jamocha Content
            </NavbarBrand>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
