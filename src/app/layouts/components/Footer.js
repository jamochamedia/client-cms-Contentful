import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const FooterWrapper = styled.div`
  background-color: #131313;
  color: #4e5155;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  min-height: 40px;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <Container fluid>
          <Row noGutters>
          </Row>
        </Container>
      </FooterWrapper>
    );
  }
}

export default Footer;
