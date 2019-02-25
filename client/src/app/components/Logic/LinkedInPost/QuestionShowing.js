import React from "react";

import { Paragraph } from "../../Typography/ParapgraphText";

function QuestionShowing(props) {
  if (props.answerUrl === undefined) {
    return (
      <div>
        <Paragraph>{props.question}</Paragraph>
      </div>
    );
  } else {
    return (
      <a href={`${props.answerUrl}`} rel="noopener noreferrer" target="_blank">
        <Paragraph>{props.question}</Paragraph>
      </a>
    );
  }
}

export default QuestionShowing;
