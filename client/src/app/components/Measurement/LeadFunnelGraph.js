import styled from "styled-components";
import React from "react";
import { Col, Row } from "reactstrap";

import { H3 } from "../Typography/HeaderText";

const Card = styled.div`
  background-color: white;
  min-height: 400px;
  width: 100%;
  box-shadow: 0 0 4rem 0 rgba(136, 152, 170, 0.15);
  border-radius: 0.375rem;
  padding: 30px;
  margin: auto 0;
`;

const FunnelTop = styled.div`
  position: absolute;
  top: -7px;
  left: -120px;
  z-index: 20;
  width: 320px;
  height: 14px;
  background: #919eb1;
  border-radius: 100%;
`;

const FunnelBottom = styled.div`
  position: absolute;
  bottom: -7px;
  left: -0px;
  z-index: 20;
  width: 80px;
  height: 16px;
  background: #273445;
  border-radius: 100%;
`;

const Li = styled.div`
  font-size: 16px;
  line-height: 70px;
  height: 70px;
  width: 80px;
  position: relative;
  background: #ccc;
  color: #ffffff;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    z-index: 10;
    left: 0%;
    margin-left: -30px;
    width: 30px;
    border-top: 70px solid #ccc;
    border-left: 30px solid transparent;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 10;
    right: 0%;
    margin-left: 30px;
    width: 30px;
    border-top: 70px solid #ccc;
    border-right: 30px solid transparent;
  }

  &:nth-child(1) {
    background: #919eb1;
  }
  &:nth-child(1):before,
  &:nth-child(1):after {
    border-top-color: #919eb1;
  }
  &:nth-child(1):before {
    width: 120px;
    margin-left: -120px;
  }
  &:nth-child(1):after {
    width: 120px;
    margin-right: -120px;
  }

  &:nth-child(2) {
    background: #778599;
  }
  &:nth-child(2):before,
  &:nth-child(2):after {
    border-top-color: #778599;
  }
  &:nth-child(2):before {
    width: 90px;
    margin-left: -90px;
  }
  &:nth-child(2):after {
    width: 90px;
    margin-right: -90px;
  }

  &:nth-child(3) {
    background: #606f84;
  }
  &:nth-child(3):before,
  &:nth-child(3):after {
    border-top-color: #606f84;
  }
  &:nth-child(3):before {
    width: 60px;
    margin-left: -60px;
  }
  &:nth-child(3):after {
    width: 60px;
    margin-right: -60px;
  }

  &:nth-child(4) {
    background: #536075;
  }
  &:nth-child(4):before,
  &:nth-child(4):after {
    border-top-color: #536075;
  }
  &:nth-child(4):before {
    width: 30px;
    margin-left: -30px;
  }
  &:nth-child(4):after {
    width: 30px;
    margin-right: -30px;
  }
`;

const funnel = {
  width: "750px",
  margin: "auto 0"
};

const style = {
  margin: "45px 80px",
  listStyle: "none",
  textAlign: "center"
};

const top = {
  color: "#919eb1"
};

const layer2 = {
  color: "#778599"
};

const layer3 = {
  color: "#606f84"
};

const layer4 = {
  color: "#536075"
};

const m40 = {
  marginTop: "40px"
};

function LeadFunnelGraph(props) {
  return (
    <Card>
      <div style={funnel}>
        <H3>Lead Funnel</H3>
        <ul style={style}>
          <Li>
            <FunnelTop />
            {props.sent}
          </Li>
          <Li>{props.accepted}</Li>
          <Li>{props.responded}</Li>
          <Li>
            {props.leads}
            <FunnelBottom />
          </Li>
        </ul>
      </div>
      <Row style={m40}>
        <Col lg="6">
          <p style={top}>&#x25CF; Sent</p>
        </Col>
        <Col lg="6">
          <p style={layer2}>&#x25CF; Accepted</p>
        </Col>
        <Col lg="6">
          <p style={layer3}>&#x25CF; Responded</p>
        </Col>
        <Col lg="6">
          <p style={layer4}>&#x25CF; Leads</p>
        </Col>
      </Row>
    </Card>
  );
}

export default LeadFunnelGraph;
