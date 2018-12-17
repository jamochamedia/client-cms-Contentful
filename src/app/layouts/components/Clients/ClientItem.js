import React from "react";
import StyledLink from "../Typography/LinkStyles";

const LinkedInItem = props => (
  <div className="content">
    <h1>{props.clientName.fields.clientName}</h1>
    <StyledLink
      to={{
        pathname: `/clients/${props.path}`,
        state: { props }
      }}
    >
      Go to profile
    </StyledLink>
  </div>
);

export default LinkedInItem;
