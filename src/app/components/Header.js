import React from "react";
import { Container, Row, NavbarBrand, Navbar, NavLink } from "reactstrap";

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
              Jamocha Writer Home
            </NavbarBrand>
            <NavLink style={textStyle} href="">
              Write
            </NavLink>
            <NavLink style={textStyle} href="#">
              Analytics
            </NavLink>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
