import styled from "styled-components";
import React from "react";

import { Col, Row } from "reactstrap";

import { D4 } from "../Typography/DisplayText";
import { H4 } from "../Typography/HeaderText";

const Card = styled.div`
  height: 100px;
  width: 100%;
  background-color: #292f36;
  border-radius: 0.375rem;
  box-shadow: 0 0 4rem 0 rgba(136, 152, 170, 0.15);
  margin: auto 0;
  padding: 15px 20px 40px 20px;
  color: white;
`;

const IconCircle = styled.div`
  margin-top: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: white;
`;

const white = {
  color: "white"
};

function StatsCard(props) {
  return (
    <div>
      <Card>
        <Row>
          <Col xs="9">
            <D4>{props.number}</D4>
            <H4 style={white}>{props.title}</H4>
          </Col>
          <Col xs="3">
            <IconCircle />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default StatsCard;
