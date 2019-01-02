import React, { Component } from "react";

import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../components/Typography/HeaderText";

import ContentTracker from "../components/Tables/Clients/ContentTracker";
import ClientHomeTracker from "../components/Tables/Clients/ClientHomeTracker";
import InvoiceHomeTracker from "../components/Tables/Invoices/InvoiceHomeTracker";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #508991 0%,
    #508991 30%,
    #0ad198 30%,
    #0ad198 37%,
    #f7f7f7 37%,
    #f7f7f7 100%
  );
`;

const white = {
  color: "white",
  marginBottom: "20px"
};

const m20 = {
  marginTop: "20px"
};

const mr20 = {
  marginRight: "20px"
};

class Home extends Component {
  render() {
    return (
      <div>
        <BgPrimary>
          <Container fluid>
            <ContentWrapper>
              <H2 style={white}>
                <FontAwesomeIcon style={mr20} icon="home" /> Admin Dashboard
              </H2>
              <ContentTracker />
              <Row>
                <Col lg="5" style={m20}>
                  <ClientHomeTracker />
                </Col>
                <Col lg="7" style={m20}>
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
