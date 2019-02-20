import React from "react";
import { withRouter } from "react-router-dom";

import { Col, Row, Button } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";

import StatsCard from "../../components/Cards/Stats";

import Background from "../../img/profile-background.jpg";
import styled from "styled-components";
import LeadFunnelGraph from "../../components/Graphs/LeadFunnelGraph";

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

const invoice = {
  marginBottom: "20px",
  border: "none",
  boxShadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)",
  float: "right"
};

const Analytics = props => {
  return (
    <div>
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <Row>
              <Col>
                {/* <D3 style={white}>{props.clientName}</D3>
            <H3 style={white}>{props.companyName}</H3> */}
                <D3 style={white}>David Segura</D3>
                <H3 style={white}>Carbon.io</H3>
              </Col>
            </Row>
          </Header>
        </Container>
      </div>
      <Container>
        <Content>
          <Row>
            <BlockContainer>
              <Col>
                <Button style={invoice}>Switch to Content Tracker</Button>
              </Col>
            </BlockContainer>
          </Row>
          <Row>
            <Col lg="4" md="6" sm="12">
              <BlockContainer>
                <StatsCard
                  number="635"
                  title="Sent Requests"
                  icon={faPaperPlane}
                />
              </BlockContainer>
            </Col>
            <Col lg="4" md="6" sm="12">
              <BlockContainer>
                <StatsCard
                  number="340"
                  title="Accepted Connects"
                  icon={faUserCheck}
                />
              </BlockContainer>
            </Col>
            <Col lg="4" md="6" sm="12">
              <BlockContainer>
                <StatsCard
                  number="40"
                  title="Messages Received"
                  icon={faCommentAlt}
                />
              </BlockContainer>
            </Col>
          </Row>
          <Row>
            <Col lg="8" md="12" style={m10}>
              <BlockContainer>
                <FollowUps />
              </BlockContainer>
            </Col>
            <Col lg="4" md="12" style={m10}>
              <BlockContainer>
                <LeadFunnelGraph
                  sent="635"
                  accepted="340"
                  responded="40"
                  leads="20"
                />
              </BlockContainer>
            </Col>
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default withRouter(Analytics);
