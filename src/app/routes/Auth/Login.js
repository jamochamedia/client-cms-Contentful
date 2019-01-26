import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";

import styled from "styled-components";

import { H1, H2, H4 } from "../../components/Typography/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ssoLogin } from "../../../utils/Auth/Auth";

const MainContainer = styled.div`
  display: table;
  width: 100%
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

const InputWrap = styled.div`
  overflow: hidden;
  padding-right: 0.5em;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const right = {
  marginTop: "15px",
  float: "right"
};

export default class Login extends React.Component {
  state = {
    email: ""
  };

  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this._sso();
    }
  };

  _onChange = e => {
    this.setState({ email: e.target.value });
  };

  _sso = () => {
    const { email } = this.state;
    ssoLogin(email, this.props.history);
  };

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
                      <FontAwesomeIcon icon="lock" />
                    </H1>
                  </Col>
                  <Col xs="12" sm="10" md="11">
                    <form ref={el => (this.myForm = el)}>
                      <LeftBorder>
                        <H2>Enter Your Email</H2>
                        <H4>
                          We'll send you a confirmation link to get started.
                        </H4>
                        <Button type="submit" style={right} onClick={this._sso}>
                          Confirm
                        </Button>
                        <InputWrap>
                          <Input
                            placeholder="example@example.com"
                            onChange={this._onChange}
                            onKeyDown={this.onEnterPress}
                          />
                        </InputWrap>
                      </LeftBorder>
                    </form>
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
