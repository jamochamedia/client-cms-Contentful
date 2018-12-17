import React from "react";
import StyledLink from "../Typography/LinkStyles";

const LinkedInItem = props => (
  <div className="content">
    <h1>{props.postTitle}</h1>
    <p>{props.status}</p>
    <p>{props.linkedInPostBody}</p>
    <StyledLink
      to={{
        pathname: `/linkedin/${props.path}`,
        state: { props }
      }}
    >
      Go to post
    </StyledLink>
  </div>
);

export default LinkedInItem;
