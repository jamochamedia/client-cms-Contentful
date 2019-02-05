import styled from "styled-components";
import React from "react";

import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { D4 } from "../Typography/DisplayText";
import { H4 } from "../Typography/HeaderText";

const Card = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 0 4rem 0 rgba(136, 152, 170, 0.15);
  margin: auto 0;
  padding: 15px 20px;
  color: #292f36;
`;

const IconCircle = styled.div`
  margin-top: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #292f36;
  color: white;
  padding: 14px 16px;
`;

const icon = {
  margin: "0 auto"
};

function StatsCard(props) {
  return (
    <div>
      <Card>
        <Row>
          <Col xs="9">
            <D4>{props.number}</D4>
            <H4>{props.title}</H4>
          </Col>
          <Col xs="3">
            <IconCircle>
              <FontAwesomeIcon style={icon} icon={props.icon} />
            </IconCircle>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default StatsCard;
