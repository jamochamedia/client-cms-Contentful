import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { Col, Row, Button } from "reactstrap";
import styled from "styled-components";

import { client } from "../../../utils/client";

import { D3 } from "../../components/Typography/DisplayText";
import { Paragraph } from "../../components/Typography/ParapgraphText";

import { DefaultCard, SecondaryCard } from "../../components/Cards/Stats";
import ProfileCard from "../../components/Cards/ProfileCard";
import Background from "../../img/profile-background.jpg";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 3%;
`;

const BlockContainer = styled.div`
  margin-top: 20px;
  padding-left: 3%;
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
    // console.log(res);
  };

  const { fields = {} } = profile;
  console.log(profile);
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
          <Row>
            <Col sm="12" lg="4">
              <BlockContainer>
                <DefaultCard />
              </BlockContainer>
            </Col>
            <Col sm="12" lg="4">
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
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="9">
            <Paragraph>
              <b>Profile Re-Write: </b> <br />
              <a href={`${fields.profileAuditLink}`}>
                {fields.profileAuditLink}
              </a>
            </Paragraph>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(ClientProfile);
