import React, { Component } from "react";
import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const BgPrimary = styled.div`
  background: linear-gradient(
    to bottom,
    #566373 0%,
    #566373 50%,
    #566373 50%,
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
