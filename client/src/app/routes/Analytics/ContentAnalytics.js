import React from "react";
import { withRouter } from "react-router-dom";

import { Col, Row } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";

import StatsCard from "../../components/Cards/Stats";

import Background from "../../img/profile-background.jpg";
import styled from "styled-components";

import {
  faPaperPlane,
  faUserCheck,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

import FollowUps from "../../components/Tables/Analytics/FollowUps";
import GetClientContentAnalytics from "../../../containers/GetClientContentAnalytics";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  margin-left: 3%;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 4% 3% 3% 3%;
`;

const BackgroundHead = {
  background:
    "linear-gradient( to bottom, #292f36ad 100%, #292f36ad 100%), url(" +
    Background +
    ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "210px"
};

const BlockContainer = styled.div`
  margin: 20px 20px 0 0;
`;

const white = {
  color: "white"
};

const m10 = {
  marginTop: "10px"
};

const ContentAnalytics = props => {
  const auth0Id = localStorage.getItem("userId");

  return (
    <GetClientContentAnalytics auth0Id={auth0Id}>
      {data => {
        const fields = data.getClientContentAnalytics;
        return (
          <div>
            <div style={BackgroundHead}>
              <Container>
                <Header>
                  <Row>
                    <Col>
                      <D3 style={white}>Content Analytics</D3>
                      <H3 style={white}>{fields.clientName}</H3>
                    </Col>
                  </Row>
                </Header>
              </Container>
            </div>
            <Container>
              <Content>
                <Row>
                  <Col lg="4" md="6" sm="12">
                    <BlockContainer>
                      <StatsCard
                        number={fields.messagesReceived}
                        title="Most Recent Post"
                        icon={faCommentAlt}
                      />
                    </BlockContainer>
                  </Col>
                  <Col lg="4" md="6" sm="12">
                    <BlockContainer>
                      <StatsCard
                        number={fields.viewsThisMonth}
                        title="Views This Month"
                        icon={faPaperPlane}
                      />
                    </BlockContainer>
                  </Col>
                  <Col lg="4" md="6" sm="12">
                    <BlockContainer>
                      <StatsCard
                        number={fields.lifetimeViews}
                        title="Lifetime Content Views"
                        icon={faUserCheck}
                      />
                    </BlockContainer>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" style={m10}>
                    <BlockContainer>
                      <FollowUps analyticsId={fields.id} />
                    </BlockContainer>
                  </Col>
                </Row>
              </Content>
            </Container>
          </div>
        );
      }}
    </GetClientContentAnalytics>
  );
};

export default withRouter(ContentAnalytics);
