import React, { Component } from "react";
import ContentTracker from "../components/Tables/ContentTracker/ContentTracker";
import { H3 } from "../components/Typography/HeaderText";

class Home extends Component {
  render() {
    return (
      <div>
        <H3>Content In Progress</H3>
        <ContentTracker />
      </div>
    );
  }
}

export default Home;
