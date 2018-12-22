import React, { Component } from "react";
import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <ContentTracker />
        </ContentWrapper>
      </div>
    );
  }
}

export default Home;
