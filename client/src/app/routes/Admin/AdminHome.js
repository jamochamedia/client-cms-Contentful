import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../../components/Typography/HeaderText";

import EditorContentReview from "../../components/Tables/Content/EditorContentReview";
import EditorContentTracker from "../../components/Tables/Content/EditorContentTracker";
import ClientList from "../../components/Tables/Clients/ClientList";
import InvoiceHomeTracker from "../../components/Tables/Invoices/InvoiceHomeTracker";
import WriterList from "../../components/Tables/Writers/WriterTracker";

import { areAuthItemsSet } from "../../../utils/Auth/Auth";
import AdminContentForPost from "../../components/Tables/Content/AdminContentForPost";

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
                  <FontAwesomeIcon style={mr20} icon="home" /> Admin Dashboard
                </H2>
                <Row>
                  <Col lg="6" style={m20}>
                    <EditorContentReview auth0Id={auth0Id} />
                  </Col>
                  <Col lg="6" style={m20}>
                    <AdminContentForPost />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" style={m20}>
                    <EditorContentTracker />
                  </Col>
                  <Col lg="6" style={m20}>
                    <ClientList />
                  </Col>
                  <Col lg="6" style={m20}>
                    <InvoiceHomeTracker />
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" style={m20}>
                    <WriterList />
                  </Col>
                  <Col lg="6" style={m20} />
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
