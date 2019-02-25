import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import GetClient from "../../../containers/GetClient";

import { Col, Row, Button } from "reactstrap";
import { D3 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";

import ProfileCard from "../../components/Cards/ProfileCard";
import ClientTracker from "../../components/Tables/Content/ClientContentTracker";
import InvoiceTracker from "../../components/Tables/Invoices/InvoiceTracker";

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

const ClientProfile = props => {
  const clientId = props.match.params.clientprofileid;

  //Render Invoice Tracker
  const [displayInvoiceTracker, setTracker] = useState(false);

  const displayTracker = async () => {
    const response = !displayInvoiceTracker;
    setTracker(response);
  };

  //define conditional prop variables
  let tracker;
  let buttonText;

  //conditional rendering logic for content and invoices
  if (displayInvoiceTracker) {
    buttonText = "Content Tracker";
    //checking for if clientName matches (previously fields.clientName)
    tracker = <InvoiceTracker clientId={clientId} />;
  } else {
    buttonText = "Invoices";
    tracker = <ClientTracker clientId={clientId} />;
  }

  return (
    <GetClient clientId={clientId}>
      {data => {
        const fields = data.getClient;
        return (
          <div>
            <div style={BackgroundHead}>
              <Container>
                <Header>
                  <D3 style={white}>{fields.clientName}</D3>
                  <H3 style={white}>{fields.companyName}</H3>
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
                          <Button style={invoice} onClick={displayTracker}>
                            {buttonText}
                          </Button>
                        </Col>
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
                  <Col lg="8" md="6" sm="12">
                    <TrackerContainer>{tracker}</TrackerContainer>
                  </Col>
                </Row>
              </Content>
            </Container>
          </div>
        );
      }}
    </GetClient>
  );
};

export default withRouter(ClientProfile);
