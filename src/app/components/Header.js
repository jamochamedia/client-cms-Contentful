import React from "react";
import {
  NavbarBrand,
  Navbar,
  NavLink,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Container
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { logout, areAuthItemsSet, userHasScopes } from "../../utils/Auth/Auth";

const NavStyle = {
  backgroundColor: "#292f36"
};

const NavLinkStyle = {
  cursor: "pointer"
};

const white = {
  color: "white"
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar style={NavStyle} dark expand="md">
        <Container fluid>
          {userHasScopes(["admin:all"]) ? (
            <NavbarBrand href="/admin">Jamocha CMS</NavbarBrand>
          ) : (
            [
              userHasScopes(["role:editor"]) ? (
                <NavbarBrand href="/editor">Jamocha CMS</NavbarBrand>
              ) : (
                <NavbarBrand href="/">Jamocha CMS</NavbarBrand>
              )
            ]
          )}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {userHasScopes(["role:editor"]) && (
                <NavItem>
                  <NavLink
                    style={white}
                    target="_blank"
                    href="https://app.contentful.com/spaces/le3jnclmcpxu/home"
                  >
                    Contentful
                  </NavLink>
                </NavItem>
              )}
              <NavItem style={NavLinkStyle}>
                {areAuthItemsSet() && (
                  <NavLink style={white} onClick={() => logout()}>
                    <FontAwesomeIcon icon="sign-in-alt" /> Logout
                  </NavLink>
                )}
                {!areAuthItemsSet() && (
                  <NavLink style={white} href="/login">
                    <FontAwesomeIcon icon="sign-in-alt" /> Login
                  </NavLink>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
