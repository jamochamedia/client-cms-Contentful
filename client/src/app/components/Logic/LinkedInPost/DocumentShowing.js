import React from "react";

import { Paragraph } from "../../Typography/ParapgraphText";

function DocumentShowing(props) {
  if (props.documentUrl === undefined) {
    return <Paragraph>Document not added.</Paragraph>;
  } else {
    return (
      <a
        href={`${props.documentUrl}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Paragraph>{props.documentUrl}</Paragraph>
      </a>
    );
  }
}

export default DocumentShowing;
