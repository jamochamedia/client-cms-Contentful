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
  color: "#e4e4e4"
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
              <NavItem>
                {/* Mehak Admin Account */}
                {userHasScopes(["4NEqNfnEs8gG4guQQ6Wgcy"]) && (
                  <NavLink style={white} href="/writers/4NEqNfnEs8gG4guQQ6Wgcy">
                    <FontAwesomeIcon icon="user" /> Profile
                  </NavLink>
                )}
                {/* Mehak Client Account */}
                {userHasScopes(["53jNSEKtqgYamEeo6uu6Oo"]) && (
                  <NavLink style={white} href="/clients/53jNSEKtqgYamEeo6uu6Oo">
                    <FontAwesomeIcon icon="user" /> Profile
                  </NavLink>
                )}
                {/* Chelsea Editor Account */}
                {userHasScopes(["7y0Unz69pK8sgaq62EeUuy"]) && (
                  <NavLink style={white} href="/writers/7y0Unz69pK8sgaq62EeUuy">
                    <FontAwesomeIcon icon="user" /> Profile
                  </NavLink>
                )}
              </NavItem>
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
