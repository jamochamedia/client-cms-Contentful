import React from "react";

const LinkedInPost = ({
  location: {
    state: { props }
  }
}) => {
  return (
    <div>
      <h1>{props.postTitle}</h1>
      {props.linkedInPostBody ? props.linkedInPostBody : "No post content"}
    </div>
  );
};

export default LinkedInPost;
