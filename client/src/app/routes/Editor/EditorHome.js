import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../../components/Typography/HeaderText";

import EditorContentTracker from "../../components/Tables/Content/EditorContentTracker";
import EditorContentReview from "../../components/Tables/Content/EditorContentReview";
import WriterTacker from "../../components/Tables/Writers/WriterTracker";
import ClientList from "../../components/Tables/Clients/ClientList";

import { areAuthItemsSet } from "../../../utils/Auth/Auth";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #508991 0%,
    #508991 30%,
    #0ad198 30%,
    #0ad198 37%,
    #f7f7f7 37%,
    #f7f7f7 100%
  );
`;

const white = {
  color: "white",
  marginBottom: "20px"
};

const m20 = {
  marginTop: "20px"
};

const mr20 = {
  marginRight: "20px"
};

class Home extends Component {
  render() {
    const auth0Id = localStorage.getItem("userId");
    return (
      <div>
        {!areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <BgPrimary>
            <Container fluid>
              <ContentWrapper>
                <H2 style={white}>
                  <FontAwesomeIcon style={mr20} icon="home" /> Editor Dashboard
                </H2>
                <EditorContentReview auth0Id={auth0Id} />
                <Row>
                  <Col lg="12" style={m20}>
                    <EditorContentTracker />
                  </Col>
                  <Col lg="6" style={m20}>
                    <ClientList />
                  </Col>
                  <Col lg="6" style={m20}>
                    <WriterTacker />
                  </Col>
                </Row>
              </ContentWrapper>
            </Container>
          </BgPrimary>
        )}
      </div>
    );
  }
}

export default Home;
