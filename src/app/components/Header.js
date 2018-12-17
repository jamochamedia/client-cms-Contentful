import React from "react";
import StyledLink, { Href } from "./Typography/LinkStyles";
import { Container, Row, NavbarBrand, Navbar, NavLink } from "reactstrap";
import styled from "styled-components";

const TextStyle = styled.div`
  color: white;
`;

class Header extends React.Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#292f36" }}>
        <Container fluid>
          <Row noGutters>
            <StyledLink to="/">
              <TextStyle>
                <NavbarBrand>Jamocha Writer Home</NavbarBrand>
              </TextStyle>
            </StyledLink>
            <Href href="https://app.contentful.com/spaces/le3jnclmcpxu/home">
              <TextStyle>
                <NavLink>Write</NavLink>
              </TextStyle>
            </Href>
            <StyledLink to="/">
              <TextStyle>
                <NavLink>Analytics</NavLink>
              </TextStyle>
            </StyledLink>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
