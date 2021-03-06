import React from "react";
import { withRouter } from "react-router-dom";

import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";
import ProfileCard from "../../components/Cards/ProfileCard";

import styled from "styled-components";
import { Col, Row, Button } from "reactstrap";

import Background from "../../img/profile-background.jpg";

import GetWriter from "../../../containers/GetWriter";

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
  const writerId = props.match.params.writerid;
  return (
    <GetWriter writerId={writerId}>
      {data => {
        const fields = data.getWriter;
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
                          <Button
                            style={linkedIn}
                            href={`${fields.linkedInUrl}`}
                          >
                            LinkedIn Profile
                          </Button>
                        </Col>
                      </Row>
                      <ProfileCard
                        role={fields.position}
                        description={
                          fields.description
                            ? fields.description
                            : "No Description Available"
                        }
                      />
                    </BlockContainer>
                  </Col>
                </Row>
              </Content>
            </Container>
          </div>
        );
      }}
    </GetWriter>
  );
};

export default withRouter(WriterProfile);
