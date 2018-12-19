import React from "react";
import { Link } from "react-router-dom";

const ClientItem = props => (
  <div className="content">
    <h3>{props.clientName}</h3>
    <Link
      to={{
        pathname: `/clients/${props.path}`,
        state: { props }
      }}
    >
      Go to profile
    </Link>
  </div>
);

export default ClientItem;
