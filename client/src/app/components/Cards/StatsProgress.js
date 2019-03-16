import styled from "styled-components";
import React from "react";

import { D5 } from "../Typography/DisplayText";
import { H4 } from "../Typography/HeaderText";

// import ProgressBar from "../Measurement/ProgressBar";

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

const M20 = {
  marginTop: "10px",
  marginBottom: "5px"
};

function StatsProgress(props) {
  return (
    <Card>
      <H4 style={M20}>{props.title}</H4>
      <D5>
        {props.number} out of {props.goal}
      </D5>
      {/* <ProgressBar width={props.width} /> */}
    </Card>
  );
}

export default StatsProgress;
