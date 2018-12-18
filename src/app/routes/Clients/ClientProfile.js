import React from "react";
import * as Markdown from "react-markdown";

import { H3 } from "../../components/Typography/HeaderText";
import styled from "styled-components";

const ProfileHeader = styled.div`
  min-height: 100px;
  background-color: #00038ee6;
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
          <p style={white}>
            <b>Company:</b> {props.companyName}
          </p>
          <p style={white}>
            <b>Role:</b> {props.clientRole}
          </p>
          <p style={white}>
            <b>Profile URL:</b> {props.linkedInUrl}
          </p>
        </Container>
      </ProfileHeader>
      <Container>
        <p>
          <b>Profile Re-Write: </b>
          {props.profileAuditLink}
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
      </Container>
    </div>
  );
};

export default ClientProfile;
