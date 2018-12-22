import React, { useState, useEffect } from "react";
import * as Markdown from "react-markdown";
import { withRouter } from "react-router-dom";

import { D3 } from "../../components/Typography/DisplayText";
import { Paragraph } from "../../components/Typography/ParapgraphText";
import Background from "../../img/profile-background.jpg";

import { client } from "../../../utils/client";

import { Col, Row, Button } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 3%;
`;

const white = {
  color: "white"
};

const BackgroundHead = {
  background:
    "linear-gradient( to bottom, #292f36ad 100%, #292f36ad 100%), url(" +
    Background +
    ")",
  backgroundSize: "cover",
  backgroundPosition: "center"
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

  console.log(profile);
  const { fields = {} } = profile;
  return (
    <div>
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <D3 style={white}>{fields.clientName}</D3>
            <Button href={`${fields.linkedInUrl}`}>Go To Profile</Button>
          </Header>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="9">
            <Paragraph>
              <b>Role:</b> {fields.clientRole}
            </Paragraph>
            <Paragraph>
              <b>Company Name:</b> {fields.companyName}
            </Paragraph>
            <Paragraph>
              <b>Profile URL: </b>
              <a href={`${fields.linkedInUrl}`}>{fields.linkedInUrl}</a>
            </Paragraph>
            <Paragraph>
              <b>Profile Re-Write: </b> <br />
              <a href={`${fields.profileAuditLink}`}>
                {fields.profileAuditLink}
              </a>
            </Paragraph>
            <Paragraph>
              <b>Description:</b> <br />
              <Markdown
                source={
                  fields.clientDescription
                    ? fields.clientDescription
                    : "No Description Available"
                }
              />
            </Paragraph>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(ClientProfile);
