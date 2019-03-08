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
import FindClientLeadPage from "../../containers/FindClientLeadPage";

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
          <FindClientLeadPage auth0Id={auth0Id}>
            {data => {
              const fields = data.findClientLeadPage;
              return (
                <BgPrimary>
                  <Container fluid>
                    <ContentWrapper>
                      <H2 style={white}>
                        <FontAwesomeIcon style={title} icon="home" /> Welcome,{" "}
                        {fields.clientName}!
                      </H2>
                      <Row>
                        <Col lg="4" style={m15}>
                          <StatsProgress
                            number={fields.postedPosts}
                            goal={fields.postQuota}
                            title="Content Posted this Month"
                            //TODO ADD WIDTH
                            width="30%"
                          />
                        </Col>
                        <Col lg="4" style={m15}>
                          <Stats
                            number={fields.sentRequests}
                            title="Sent Requests this Month"
                            icon="paper-plane"
                          />
                        </Col>
                        <Col lg="4" style={m15}>
                          {/* TODO LINK TO ANALYTICS PAGE */}
                          <Stats
                            number={fields.qualifiedLeads}
                            title="Qualified Sales Leads"
                            icon="check-square"
                          />
                        </Col>
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
              );
            }}
          </FindClientLeadPage>
        )}
      </div>
    );
  }
}

export default Home;
