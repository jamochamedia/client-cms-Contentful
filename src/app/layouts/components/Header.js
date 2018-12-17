import React from "react";
import StyledLink, { Href } from "./Typography/LinkStyles";
import { Container, Row, NavbarBrand, Navbar, NavLink } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#292f36" }}>
        <Container fluid>
          <Row noGutters>
            <StyledLink to="/">
              <NavbarBrand>Jamocha Writer Home</NavbarBrand>
            </StyledLink>
            <Href href="https://app.contentful.com/spaces/le3jnclmcpxu/home">
              <NavLink>Write</NavLink>
            </Href>
            <StyledLink to="/">
              <NavLink>Analytics</NavLink>
            </StyledLink>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
