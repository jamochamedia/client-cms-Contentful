import React from "react";
import StyledLink from "../../components/Typography/LinkStyles";

const LinkedInItem = props => (
  <div className="content">
    <h3>{props.clientName}</h3>
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
