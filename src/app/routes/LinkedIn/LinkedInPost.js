import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as Markdown from "react-markdown";

import { client } from "../../../utils/client";

const LinkedInPost = props => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchLinkedInPost();
  }, {});

  const fetchLinkedInPost = async () => {
    const response = await client.getEntry(props.match.params.linkedinpostid);
    setPost(response.fields);
  };

  return (
    <div>
      <h1>{post.postTitle}</h1>
      <p>{post.status}</p>
      <Markdown
        source={
          post.linkedInPostBody ? post.linkedInPostBody : "No post content"
        }
      />
    </div>
  );
};

export default withRouter(LinkedInPost);
