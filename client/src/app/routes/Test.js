import React, { Component } from "react";
import StatsProgress from "../components/Cards/Stats";
import { Col, Row } from "reactstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <StatsProgress />
          </Col>
          <Col>
            <StatsProgress />
          </Col>
          <Col>
            <StatsProgress />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Test;
