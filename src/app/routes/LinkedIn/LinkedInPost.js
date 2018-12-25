import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

import styled from "styled-components";
import { Button } from "reactstrap";

import { D3 } from "../../components/Typography/DisplayText";
import { H4 } from "../../components/Typography/HeaderText";
import Background from "../../img/profile-background.jpg";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 3%;
`;

const Status = styled.div`
  margin: 10px 0 20px 0;
`;

//White text style
const white = {
  color: "white"
};

const BackgroundHead = {
  //Creates double color background effect
  background:
    "linear-gradient( to bottom, #292f36ad 100%, #292f36ad 100%), url(" +
    Background +
    ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "275px"
};

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
      <div style={BackgroundHead}>
        <Container>
          <Header>
            <D3 style={white}>{post.postTitle}</D3>
            <Status>
              <H4>
                <span
                  style={{
                    color:
                      post.status === "Question Sent"
                        ? "#9106e8"
                        : post.status === "In Writing"
                        ? "#00db62"
                        : post.status === "In Editing"
                        ? "#fce302"
                        : post.status === "In Client Review"
                        ? "#e03404"
                        : post.status === "Ready for Post"
                        ? "#01a6ff"
                        : post.status === "Posted"
                        ? "#ff9900"
                        : post.status === "Not Posting"
                        ? "#000000"
                        : "#5a5f66"
                  }}
                >
                  &#x25C9; {post.status}
                </span>
              </H4>
            </Status>
            <Button href={`${post.documentUrl}`}>Go To Document</Button>
          </Header>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(LinkedInPost);
