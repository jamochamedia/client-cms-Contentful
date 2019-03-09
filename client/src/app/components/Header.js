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
import FindUser from "../../containers/FindUser";
import FindAdmin from "../../containers/FindAdmin";
import FindClientLeadPage from "../../containers/FindClientLeadPage";
import GetClientContentAnalytics from "../../containers/GetClientContentAnalytics";

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
    const auth0Id = localStorage.getItem("userId");
    return (
      <Navbar style={NavStyle} dark expand="md">
        <Container fluid>
          {userHasScopes(["admin:all"]) ? (
            <NavbarBrand href="/admin">Jamocha CLS</NavbarBrand>
          ) : (
            [
              userHasScopes(["role:editor"]) ? (
                <NavbarBrand href="/editor">Jamocha CLS</NavbarBrand>
              ) : (
                <NavbarBrand href="/">Jamocha CLS</NavbarBrand>
              )
            ]
          )}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {areAuthItemsSet() && (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <GetClientContentAnalytics auth0Id={auth0Id}>
                    {data => {
                      const fields = data.getClientContentAnalytics;
                      return (
                        <NavLink style={white} href={"/content/" + fields.id}>
                          <FontAwesomeIcon icon="pencil-alt" /> Content
                        </NavLink>
                      );
                    }}
                  </GetClientContentAnalytics>
                </NavItem>
                {userHasScopes(["role:editor"]) ? (
                  <NavItem>
                    <NavLink
                      style={white}
                      target="_blank"
                      href="https://app.contentful.com/spaces/le3jnclmcpxu/home"
                    >
                      Contentful
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <FindClientLeadPage auth0Id={auth0Id}>
                      {data => {
                        const fields = data.findClientLeadPage;
                        return (
                          <NavLink
                            style={white}
                            href={"/analytics/" + fields.id}
                          >
                            <FontAwesomeIcon icon="chart-area" /> Sales
                          </NavLink>
                        );
                      }}
                    </FindClientLeadPage>
                  </NavItem>
                )}
                {userHasScopes(["role:editor"]) ? (
                  <FindAdmin auth0Id={auth0Id}>
                    {data => {
                      const fields = data.findAdmin;
                      console.log(data.findAdmin);
                      return (
                        <NavItem>
                          <NavLink style={white} href={"/writers/" + fields.id}>
                            <FontAwesomeIcon icon="user" /> Profile
                          </NavLink>
                        </NavItem>
                      );
                    }}
                  </FindAdmin>
                ) : (
                  <FindUser auth0Id={auth0Id}>
                    {data => {
                      const fields = data.findUser;
                      return (
                        <NavItem>
                          <NavLink style={white} href={"/clients/" + fields.id}>
                            <FontAwesomeIcon icon="user" /> Profile
                          </NavLink>
                        </NavItem>
                      );
                    }}
                  </FindUser>
                )}
                <NavItem style={NavLinkStyle}>
                  <NavLink style={white} onClick={() => logout()}>
                    <FontAwesomeIcon icon="sign-in-alt" /> Logout
                  </NavLink>
                </NavItem>
              </Nav>
            )}
            {!areAuthItemsSet() && (
              <Nav className="ml-auto" navbar>
                <NavItem style={NavLinkStyle}>
                  <NavLink style={white} href="/login">
                    <FontAwesomeIcon icon="sign-in-alt" /> Login
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
