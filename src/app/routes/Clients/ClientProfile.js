import React, { useState, useEffect } from "react";
import * as Markdown from "react-markdown";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

import { H3 } from "../../components/Typography/HeaderText";

import { Col, Row } from "reactstrap";
import styled from "styled-components";

const ProfileHeader = styled.div`
  min-height: 100px;
  background-color: #222;
`;

const Container = styled.div`
  padding: 20px;
`;

const white = {
  color: "white"
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
    <>
      <ProfileHeader>
        <Container>
          <H3 style={white}>{fields.clientName}</H3>
        </Container>
      </ProfileHeader>
      <Container>
        <Row>
          <Col md="9">
            <p>
              <b>Role:</b> {fields.clientRole}
            </p>
            <p>
              <b>Company Name:</b> {fields.companyName}
            </p>
            <p>
              <b>Profile URL: </b>
              <a href={`${fields.profileAuditLink}`}>{fields.linkedInUrl}</a>
            </p>
            <p>
              <b>Profile Re-Write: </b> <br />
              <a href={`${fields.profileAuditLink}`}>
                {fields.profileAuditLink}
              </a>
            </p>
            <p>
              <b>Description:</b> <br />
              <Markdown
                source={
                  fields.clientDescription
                    ? fields.clientDescription
                    : "No Description Available"
                }
              />
            </p>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    </>
  );
};

export default withRouter(ClientProfile);
