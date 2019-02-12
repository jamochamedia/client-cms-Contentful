import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../components/Typography/HeaderText";
import { areAuthItemsSet } from "../../utils/Auth/Auth";

import StatsProgress from "../components/Cards/StatsProgress";
import TeamTracker from "../components/Tables/Writers/Team";
import ContentReview from "../components/Tables/Content/ContentReview";
import KeyPeople from "../components/Tables/Analytics/KeyPeople";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #508991 0%,
    #508991 40%,
    #0ad198 40%,
    #0ad198 47%,
    #f7f7f7 47%,
    #f7f7f7 100%
  );
  min-height: 100vh;
`;

const white = {
  color: "white",
  marginBottom: "20px"
};

const m20 = {
  marginTop: "20px"
};

const title = {
  marginTop: "15px",
  marginRight: "15px"
};

class Home extends Component {
  render() {
    return (
      <div>
        {!areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <BgPrimary>
            <Container fluid>
              <ContentWrapper>
                <H2 style={white}>
                  <FontAwesomeIcon style={title} icon="home" /> Welcome, FIRST
                  NAME!
                </H2>
                <Row style={m20}>
                  <Col lg="4">
                    <StatsProgress
                      number="XX"
                      goal="XXX"
                      title="LinkedIn posts this month"
                      width="30%"
                    />
                  </Col>
                  <Col lg="4">
                    <StatsProgress
                      number="XXX"
                      goal="XXX"
                      title="Sent Requests"
                      width="50%"
                    />
                  </Col>
                  <Col lg="4">
                    <StatsProgress
                      number="XX"
                      goal="XXX"
                      title="Qualified Sales Leads"
                      width="75%"
                    />
                  </Col>
                </Row>
                <Row style={m20}>
                  <Col lg="4">
                    <KeyPeople />
                  </Col>
                  <Col lg="8">
                    <ContentReview />
                  </Col>
                </Row>
                <Row style={m20}>
                  <Col lg="4">
                    <TeamTracker />
                  </Col>
                </Row>
              </ContentWrapper>
            </Container>
          </BgPrimary>
        )}
      </div>
    );
  }
}

export default Home;
