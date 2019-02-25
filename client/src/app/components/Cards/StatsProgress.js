import styled from "styled-components";
import React from "react";

import { D5 } from "../Typography/DisplayText";
import { H4 } from "../Typography/HeaderText";

import ProgressBar from "../Measurement/ProgressBar";

const Card = styled.div`
  height: 105px;
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 0 4rem 0 rgba(136, 152, 170, 0.15);
  margin: auto 0;
  padding: 15px 20px;
  color: #292f36;
`;

const Margin = styled.div.attrs({
  marginBottom: props => props.marginBottom || "10px"
})`
  margin-bottom: ${props => props.marginBottom};
`;

function StatsProgress(props) {
  return (
    <Margin>
      <Card>
        <H4>{props.title}</H4>
        <D5>
          {props.number} / {props.goal}
        </D5>
        <ProgressBar width={props.width} />
      </Card>
    </Margin>
  );
}

export default StatsProgress;
