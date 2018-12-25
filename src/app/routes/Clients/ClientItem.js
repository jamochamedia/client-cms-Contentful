import React from "react";
import { Link } from "react-router-dom";

const ClientItem = props => {
  return (
    <div className="content">
      <h3>{props.fields.clientName}</h3>
      <Link
        to={{
          pathname: `/clients/${props.sys.id}`,
          state: { props }
        }}
      >
        Go to profile
      </Link>
    </div>
  );
};

export default ClientItem;
