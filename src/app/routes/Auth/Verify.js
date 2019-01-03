import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";
import { H1, H2, H5 } from "../../components/Typography/HeaderText";
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

export default class Verify extends Component {
  render() {
    return (
      <Container>
        <Row>
          <MainContainer>
            <ContentContainer>
              <Col xs={{ size: 6, offset: 3 }}>
                <Row>
                  <Col xs="12" sm="2" md="1">
                    <H1>
                      <FontAwesomeIcon icon="envelope" />
                    </H1>
                  </Col>
                  <Col xs="12" sm="10" md="11">
                    <LeftBorder>
                      <H2>
                        A confirmation email has been sent to your account.
                      </H2>
                      <H5>
                        To finish setting up your account please verify your
                        email.
                      </H5>
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
