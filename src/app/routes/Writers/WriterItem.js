import React from "react";
import { Link } from "react-router-dom";

const WriterItem = props => {
  return (
    <div className="content">
      <h3>{props.fields.fullName}</h3>
      <h6>{props.fields.position}</h6>
      <Link
        to={{
          pathname: `/writers/${props.sys.id}`,
          state: { props }
        }}
      >
        Go to Profile
      </Link>
    </div>
  );
};

export default WriterItem;
