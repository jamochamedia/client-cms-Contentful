import React, { Component } from "react";

import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { H2 } from "../components/Typography/HeaderText";

import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import ClientHomeTracker from "../components/Tables/ContentTracker/ClientHomeTracker";
import InvoiceHomeTracker from "../components/Tables/ContentTracker/InvoiceHomeTracker";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #09bc8a 0%,
    #09bc8a 30%,
    #09bc8a 30%,
    #292f36 30%,
    #292f36 100%
  );
`;

const white = {
  color: "white"
};

const m20 = {
  marginTop: "20px"
};

class Home extends Component {
  render() {
    return (
      <div>
        <BgPrimary>
          <Container fluid>
            <ContentWrapper>
              <H2 style={white}>Writer Content Home</H2>
              <ContentTracker />
              <Row style={m20}>
                <Col lg="5">
                  <ClientHomeTracker />
                </Col>
                <Col lg="7">
                  <InvoiceHomeTracker />
                </Col>
              </Row>
            </ContentWrapper>
          </Container>
        </BgPrimary>
      </div>
    );
  }
}

export default Home;
