import React from "react";
import { setAuthItems, userHasScopes } from "../../../utils/Auth/Auth";

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
      if (userHasScopes(["admin:all"])) {
        this.props.history.push("/admin");
      } else if (userHasScopes(["role:editor"])) {
        this.props.history.push("/editor");
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <div>{this.state.error === null ? "Loading..." : this.state.error}</div>
    );
  }
}

export default AuthHandler;
