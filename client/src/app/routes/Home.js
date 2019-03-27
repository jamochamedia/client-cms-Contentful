import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../components/Typography/HeaderText";
import { areAuthItemsSet } from "../../utils/Auth/Auth";

import StatsProgress from "../components/Cards/StatsProgress";
import Stats from "../components/Cards/Stats";
import TeamTracker from "../components/Tables/Writers/Team";
import ContentReview from "../components/Tables/Content/ContentReview";
import GetClientContentAnalytics from "../../containers/GetClientContentAnalytics";

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
  marginBottom: "10px"
};

const m20 = {
  marginTop: "20px"
};

const m15 = {
  marginTop: "15px"
};

const title = {
  marginTop: "15px",
  marginRight: "15px"
};

class Home extends Component {
  render() {
    const auth0Id = localStorage.getItem("userId");
    return (
      <div>
        {!areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <BgPrimary>
            <Container fluid>
              <ContentWrapper>
                <GetClientContentAnalytics auth0Id={auth0Id}>
                  {data => {
                    const fields = data.getClientContentAnalytics;
                    return (
                      <H2 style={white}>
                        <FontAwesomeIcon style={title} icon="home" /> Welcome,{" "}
                        {fields.clientName}!
                      </H2>
                    );
                  }}
                </GetClientContentAnalytics>
                <Row>
                  <GetClientContentAnalytics auth0Id={auth0Id}>
                    {data => {
                      const fields = data.getClientContentAnalytics;
                      return (
                        <Col lg="4" style={m15}>
                          <StatsProgress
                            number={fields.postedPosts}
                            goal={fields.postQuota}
                            title="Content Posted this Month"
                          />
                        </Col>
                      );
                    }}
                  </GetClientContentAnalytics>
                  <GetClientContentAnalytics auth0Id={auth0Id}>
                    {data => {
                      const fields = data.getClientContentAnalytics;
                      return (
                        <Col lg="4" style={m15}>
                          <Stats
                            number={fields.mostRecentPostViews}
                            title="Views on Your Last Post"
                            icon="binoculars"
                          />
                        </Col>
                      );
                    }}
                  </GetClientContentAnalytics>
                  <GetClientContentAnalytics auth0Id={auth0Id}>
                    {data => {
                      const fields = data.getClientContentAnalytics;
                      return (
                        <Col lg="4" style={m15}>
                          <Stats
                            number={fields.viewsThisMonth}
                            title="Views this Month"
                            icon="calendar-alt"
                          />
                        </Col>
                      );
                    }}
                  </GetClientContentAnalytics>
                </Row>
                <Row>
                  <Col lg="4" style={m20}>
                    <TeamTracker />
                  </Col>
                  <Col lg="8" style={m20}>
                    <ContentReview />
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
