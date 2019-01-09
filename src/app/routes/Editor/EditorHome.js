import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../../components/Typography/HeaderText";

import EditorContentTracker from "../../components/Tables/Content/EditorContentTracker";
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
                <EditorContentTracker />
                <Row>
                  <Col lg="5" style={m20}>
                    <ClientList />
                  </Col>
                  <Col lg="7" style={m20} />
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
