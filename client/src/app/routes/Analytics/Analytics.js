import React from "react";
import { withRouter } from "react-router-dom";

import { Col, Row } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";

import GetClientLeadAnalytics from "../../../containers/GetClientLeadAnalytics";

import StatsCard from "../../components/Cards/Stats";

import Background from "../../img/profile-background.jpg";
import styled from "styled-components";
import LeadFunnelGraph from "../../components/Measurement/LeadFunnelGraph";

import {
  faPaperPlane,
  faUserCheck,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

import FollowUps from "../../components/Tables/Analytics/FollowUps";

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

const Analytics = props => {
  const analyticsId = props.match.params.analyticsId;

  return (
    <GetClientLeadAnalytics analyticsId={analyticsId}>
      {data => {
        const fields = data.getClientLeadAnalytics;
        return (
          <div>
            <div style={BackgroundHead}>
              <Container>
                <Header>
                  <Row>
                    <Col>
                      {/* <D3 style={white}>{props.clientName}</D3>
            <H3 style={white}>{props.companyName}</H3> */}
                      <D3 style={white}>LinkedIn Lead Analytics</D3>
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
                        number={fields.sentRequests}
                        title="Sent Requests"
                        icon={faPaperPlane}
                      />
                    </BlockContainer>
                  </Col>
                  <Col lg="4" md="6" sm="12">
                    <BlockContainer>
                      <StatsCard
                        number={fields.acceptedRequests}
                        title="Accepted Connects"
                        icon={faUserCheck}
                      />
                    </BlockContainer>
                  </Col>
                  <Col lg="4" md="6" sm="12">
                    <BlockContainer>
                      <StatsCard
                        number={fields.messagesReceived}
                        title="Messages Received"
                        icon={faCommentAlt}
                      />
                    </BlockContainer>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8" md="12" style={m10}>
                    <BlockContainer>
                      <FollowUps analyticsId={fields.id} />
                    </BlockContainer>
                  </Col>
                  <Col lg="4" md="12" style={m10}>
                    <BlockContainer>
                      <LeadFunnelGraph
                        sent={fields.sentRequests}
                        accepted={fields.acceptedRequests}
                        responded={fields.messagesReceived}
                        leads={fields.qualifiedLeads}
                      />
                    </BlockContainer>
                  </Col>
                </Row>
              </Content>
            </Container>
          </div>
        );
      }}
    </GetClientLeadAnalytics>
  );
};

export default withRouter(Analytics);
