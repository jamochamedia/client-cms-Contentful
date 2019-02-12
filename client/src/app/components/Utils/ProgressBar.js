import styled from "styled-components";
import React from "react";

const ProgressBarContainer = styled.div`
  background-color: #292f36;
  margin-top: 7px;
  height: 10px;
  width: 260px;
  border-radius: 20px;
`;

const ProgressBarPercentage = styled.div.attrs({
  width: props => props.width || "0%"
})`
  margin-top: 7px;
  height: 10px;
  width: ${props => props.width};
  background-color: #00ce88;
  border-radius: 20px;
`;

function ProgressBar(props) {
  return (
    <div>
      <ProgressBarContainer>
        <ProgressBarPercentage width={props.width} />
      </ProgressBarContainer>
    </div>
  );
}

export default ProgressBar;
