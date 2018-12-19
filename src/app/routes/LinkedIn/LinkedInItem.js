import React from "react";
import { Link } from "react-router-dom";

const LinkedInItem = props => {
  console.log(props);
  return (
    <div className="content">
      <h1>{props.postTitle}</h1>
      <p>{props.status}</p>
      <p>{props.linkedInPostBody}</p>
      <Link
        to={{
          pathname: `/linkedin/${props.path}`,
          state: { props }
        }}
      >
        Go to post
      </Link>
    </div>
  );
};

export default LinkedInItem;
