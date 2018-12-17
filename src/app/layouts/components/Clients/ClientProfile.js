import React from "react";
import * as Markdown from "react-markdown";

const ClientProfile = ({
  location: {
    state: { props }
  }
}) => {
  return (
    <div>
      <h1>{props.clientName}</h1>
    </div>
  );
};

export default ClientProfile;
