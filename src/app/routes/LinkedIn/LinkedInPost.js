// import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
// import * as Markdown from "react-markdown";

// import { client } from "../../../utils/client";

// const LinkedInPost = props => {
//   const [post, setPost] = useState({});

//   useEffect(() => {
//     fetchPost();
//   }, {});

//   const fetchPost = async () => {
//     const res = await client.getEntry(props.match.params.linkedinpostid);
//     setPost(res);
//     console.log(res);
//   };

//   return (
//     <div>
//       <h1>{post.postTitle}</h1>
//       <p>{post.status}</p>
//       <Markdown
//         source={
//           post.linkedInPostBody ? post.linkedInPostBody : "No post content"
//         }
//       />
//     </div>
//   );
// };

// export default withRouter(LinkedInPost);

//Blog page without Hooks

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
