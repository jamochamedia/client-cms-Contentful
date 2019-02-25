import React from "react";

import { Paragraph } from "../../Typography/ParapgraphText";

function LinkedInUrlShowing(props) {
  if (props.linkedInUrl === undefined) {
    return <Paragraph>Content not posted yet.</Paragraph>;
  } else {
    return (
      <a
        href={`${props.linkedInUrl}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Paragraph>{props.linkedInUrl}</Paragraph>
      </a>
    );
  }
}

export default LinkedInUrlShowing;
