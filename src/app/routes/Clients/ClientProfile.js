import React from "react";
import * as Markdown from "react-markdown";

import { H3 } from "../../components/Typography/HeaderText";
import { Href } from "../../components/Typography/LinkStyles";

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

const ClientProfile = ({
  location: {
    state: { props }
  }
}) => {
  return (
    <div>
      <ProfileHeader>
        <Container>
          <H3 style={white}>{props.clientName}</H3>
        </Container>
      </ProfileHeader>
      <Container>
        <Row>
          <Col md="9">
            <p>
              <b>Role:</b> {props.clientRole}
            </p>
            <p>
              <b>Company Name:</b> {props.companyName}
            </p>
            <p>
              <b>Profile URL: </b>
              <Href href={`${props.profileAuditLink}`}>
                {props.linkedInUrl}
              </Href>
            </p>
            <p>
              <b>Profile Re-Write: </b> <br />
              <Href href={`${props.profileAuditLink}`}>
                {props.profileAuditLink}
              </Href>
            </p>
            <p>
              <b>Description:</b> <br />
              <Markdown
                source={
                  props.clientDescription
                    ? props.clientDescription
                    : "No Description Available"
                }
              />
            </p>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    </div>
  );
};

export default ClientProfile;
