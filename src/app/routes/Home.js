import React, { Component } from "react";
import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import styled from "styled-components";
import { H3 } from "../components/Typography/HeaderText";

const ContentWrapper = styled.div`
  padding: 20px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <ContentWrapper>
          <H3>Content In Progress</H3>
          <ContentTracker />
        </ContentWrapper>
      </div>
    );
  }
}

export default Home;
