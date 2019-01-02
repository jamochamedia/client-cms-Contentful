import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

import styled from "styled-components";
import { Col, Row, Button } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";
import ProfileCard from "../../components/Cards/ProfileCard";
import WriterTracker from "../../components/Tables/Writers/WriterTracker";
import Background from "../../img/profile-background.jpg";

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

const BackgroundHead = {
  background:
    "linear-gradient( to bottom, #292f36ad 100%, #292f36ad 100%), url(" +
    Background +
    ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "210px"
};

const WriterProfile = props => {
  //Fetch the profile from the client ID
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  const fetchProfile = async () => {
    const res = await client.getEntry(props.match.params.writerid);
    setProfile(res);
  };

  const { fields = {} } = profile;

  return (
    <div>
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <D3 style={white}>{fields.fullName}</D3>
            <H3 style={white}>{fields.position}</H3>
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
                    <Button style={linkedIn} href={`${fields.linkedInUrl}`}>
                      LinkedIn Profile
                    </Button>
                  </Col>
                </Row>
                <ProfileCard
                  role={fields.clientRole}
                  company={fields.companyName}
                  description={
                    fields.description
                      ? fields.description
                      : "No Description Available"
                  }
                />
              </BlockContainer>
            </Col>
            <Col lg="8" md="6" sm="12">
              <WriterTracker fullName={fields.fullName} />
            </Col>
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default withRouter(WriterProfile);
