import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";
import { H1, H2, H4 } from "../../components/Typography/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContainer = styled.div`
  display: table;
  width: 100%;
  height: 85vh;
`;

const ContentContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const LeftBorder = styled.div`
  margin-left: 10px;
  border-left: 3px solid #36383b;
  padding-left: 15px;
`;

const bottom = {
  paddingBottom: "15px"
};

export default class Verify extends Component {
  render() {
    return (
      <Container>
        <Row>
          <MainContainer>
            <ContentContainer>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
                <Row>
                  <Col xs="12" sm="2" md="1">
                    <H1>
                      <FontAwesomeIcon icon="envelope" />
                    </H1>
                  </Col>
                  <Col xs="12" sm="10" md="11">
                    <LeftBorder>
                      <H2>A confirmation link has been sent to your email.</H2>
                      <H4 style={bottom}>
                        To finish logging in, please click the link in your
                        email.
                      </H4>
                    </LeftBorder>
                  </Col>
                </Row>
              </Col>
            </ContentContainer>
          </MainContainer>
        </Row>
      </Container>
    );
  }
}
