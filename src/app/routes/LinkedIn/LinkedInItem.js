import React from "react";
import { Link } from "react-router-dom";

const LinkedInItem = props => {
  return (
    <div className="content">
      <h1>{props.fields.postTitle}</h1>
      <p>{props.fields.status}</p>
      <p>{props.fields.linkedInPostBody}</p>
      <Link
        to={{
          pathname: `/linkedin/${props.sys.id}`,
          state: { props }
        }}
      >
        Go to post
      </Link>
    </div>
  );
};

export default LinkedInItem;
