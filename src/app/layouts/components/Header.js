import React from "react";
import StyledLink from "../components/Typography/TextStyles";

import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { H3 } from "../../ui/Typography/HeaderText";

const HeaderWrapper = styled.div`
  background-color: #292f36;
  color: #4e5155;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  padding-left: 20px;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Container fluid>
          <Row noGutters>
            <Col xs="12">
              <StyledLink to="/">
                <H3>Jamocha Writer Home</H3>
              </StyledLink>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
