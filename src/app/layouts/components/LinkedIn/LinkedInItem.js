import React from "react";

const LinkedInItem = (props) => (
  <div className="content">
    <h1>{props.postTitle}</h1>
    <p>{props.status}</p>
    <p>{props.linkedInPostBody}</p>
  </div>
);

export default LinkedInItem;
