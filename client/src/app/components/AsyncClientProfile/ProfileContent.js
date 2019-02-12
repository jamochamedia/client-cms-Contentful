import React from "react";
import { Col, Row, Button } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";
import ProfileCard from "../../components/Cards/ProfileCard";

import Background from "../../img/profile-background.jpg";
import styled from "styled-components";

//Styles
const Container = styled.div`
  padding: 20px 20px 30px 20px;
`;

const Content = styled.div`
  margin-left: 3%;
  margin-right: 3%;
`;

const Header = styled.div`
  padding: 4% 3% 3% 3%;
`;

const BlockContainer = styled.div`
  margin-top: 20px;
  float: left;
  width: 100%;
`;

const TrackerContainer = styled.div`
  margin-top: 20px;
  float: left;
  width: 100%;
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

const white = {
  color: "white"
};

const linkedIn = {
  marginBottom: "20px",
  width: "100%",
  backgroundColor: "#292f36",
  color: "white",
  border: "none",
  boxShadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)"
};

const invoice = {
  marginBottom: "20px",
  width: "100%",
  backgroundColor: "#0ad198",
  color: "#292f36",
  border: "none",
  boxShadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)"
};

function ProfileContent(props) {
  return (
    <div>
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <D3 style={white}>{props.clientName}</D3>
            <H3 style={white}>{props.companyName}</H3>
          </Header>
        </Container>
      </div>
      <Container>
        <Content>
          <Row>
            <Col lg="4" md="6" sm="12">
              <BlockContainer>
                <Row>
                  <Col>
                    <Button style={invoice} onClick={props.displayTracker}>
                      {props.buttonText}
                    </Button>
                  </Col>
                  <Col>
                    <Button style={linkedIn} href={`${props.linkedInUrl}`}>
                      LinkedIn Profile
                    </Button>
                  </Col>
                </Row>
                <ProfileCard
                  role={props.role}
                  company={props.companyName}
                  description={
                    props.clientDescription
                      ? props.clientDescription
                      : "No Description Available"
                  }
                />
              </BlockContainer>
            </Col>
            <Col lg="8" md="6" sm="12">
              <TrackerContainer>{props.tracker}</TrackerContainer>
            </Col>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default ProfileContent;
