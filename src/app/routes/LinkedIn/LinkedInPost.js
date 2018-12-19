import React from "react";
import * as Markdown from "react-markdown";

const LinkedInPost = props => {
  return (
    <div>
      <h1>{props.postTitle}</h1>
      <p>{props.status}</p>
      <Markdown
        source={
          props.linkedInPostBody ? props.linkedInPostBody : "No post content"
        }
      />
    </div>
  );
};

export default LinkedInPost;
