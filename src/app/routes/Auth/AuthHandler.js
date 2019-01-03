import React from "react";
import { setAuthItems } from "../../../Auth/Auth";

class AuthHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidMount() {
    setAuthItems(err => {
      if (err) {
        this.setState({ error: err.errorDescription });
        return;
      }
      this.props.history.push("/admin");
    });
  }

  render() {
    return (
      <div>{this.state.error === null ? "Loading..." : this.state.error}</div>
    );
  }
}

export default AuthHandler;
