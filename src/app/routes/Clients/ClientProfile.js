import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

import styled from "styled-components";
import { Col, Row, Button } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { DefaultCard, SecondaryCard } from "../../components/Cards/Stats";
import ProfileCard from "../../components/Cards/ProfileCard";
import ClientTracker from "../../components/Tables/ContentTracker/ClientTracker";
import Background from "../../img/profile-background.jpg";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  margin-left: 3%;
`;

const Header = styled.div`
  padding: 3%;
`;

const BlockContainer = styled.div`
  margin-top: 20px;
  position: relative;
  float: left;
  width: 100%;
`;

const TrackerContainer = styled.div`
  margin-top: 50px;
  position: relative;
  float: left;
  width: 100%;
`;

//White text style
const white = {
  color: "white"
};

const BackgroundHead = {
  //Creates double color background effect
  background:
    "linear-gradient( to bottom, #292f36ad 100%, #292f36ad 100%), url(" +
    Background +
    ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "275px"
};

const ClientProfile = props => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  const fetchProfile = async () => {
    const res = await client.getEntry(props.match.params.clientprofileid);
    setProfile(res);
  };

  const { fields = {} } = profile;
  console.log(fields);
  return (
    <div>
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <D3 style={white}>{fields.clientName}</D3>
            <Button href={`${fields.linkedInUrl}`}>
              Go To LinkedIn Profile
            </Button>
          </Header>
          <Content>
            <Row>
              <Col sm="6" lg="4">
                <BlockContainer>
                  <DefaultCard />
                </BlockContainer>
              </Col>
              <Col sm="6" lg="4">
                <BlockContainer>
                  <SecondaryCard />
                </BlockContainer>
              </Col>
              <Col sm="12" lg="4">
                <BlockContainer>
                  <ProfileCard
                    role={fields.clientRole}
                    company={fields.companyName}
                    description={
                      fields.clientDescription
                        ? fields.clientDescription
                        : "No Description Available"
                    }
                  />
                </BlockContainer>
              </Col>
            </Row>
          </Content>
        </Container>
      </div>
      <Container>
        <Content>
          <Row>
            <Col md="8">
              <TrackerContainer>
                {/* TODO: Add child props */}
                <ClientTracker {...props} />
              </TrackerContainer>
            </Col>
            <Col md="2" />
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default withRouter(ClientProfile);
