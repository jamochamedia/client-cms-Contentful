import React from "react";
import { connect } from "react-redux";
import LinkedInItem from "../routes/LinkedIn/LinkedInItem";

class LinkedIn extends React.Component {
  render() {
    return (
      <div>
        <p>LinkedIn Posts Page</p>
        <br />
        {this.props.content.posts.map(({ fields }, i) => (
          <LinkedInItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    content: state.content
  };
}

export default connect(mapStateToProps)(LinkedIn);
