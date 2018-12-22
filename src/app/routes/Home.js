import React, { Component } from "react";
import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #09bc8a 0%,
    #09bc8a 50%,
    #09bc8a 50%,
    #fcfcfc 50%,
    #fcfcfc 100%
  );
`;

class Home extends Component {
  render() {
    return (
      <div>
        <BgPrimary>
          <ContentWrapper>
            <ContentTracker />
          </ContentWrapper>
        </BgPrimary>
      </div>
    );
  }
}

export default Home;
