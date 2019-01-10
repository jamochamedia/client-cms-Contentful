import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import moment from "moment";

import { D3 } from "../../components/Typography/DisplayText";
import { H4 } from "../../components/Typography/HeaderText";
import { Paragraph } from "../../components/Typography/ParapgraphText";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 3%;
`;

const Status = styled.div`
  margin: 5px 0 20px 0;
  padding: 7px;
  background-color: #0ad19847;
  border-radius: 10px;
  width: 47%;
  min-width: 290px;
`;

const PostDate = styled.div`
  padding: 10px;
  background-color: #50899147;
  border-radius: 10px;
`;

const M40 = {
  marginTop: "40px"
};

const BackgroundHead = {
  //Creates double color background effect
  background:
    "linear-gradient(to bottom, #508991 0%, #508991 30%, #0ad198 30%, #0ad198 37%, #f7f7f7 37%, #f7f7f7 100%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "275px",
  padding: "40px 20px 40px 20px"
};

//Document Page
const Document = styled.div`
  margin: 0 auto;
  background-color: white;
  width: 70%;
  min-width: 350px;
  min-height: 75vh;
  border-radius: 5px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
`;

const LinkedInPost = props => {
  const [post, setPost] = useState({});
  const [writer, setWriter] = useState({});
  const [editor, setEditor] = useState({});

  useEffect(() => {
    fetchLinkedInPost();
    fetchWriter();
    fetchEditor();
  }, {});

  const fetchLinkedInPost = async () => {
    const response = await client.getEntry(props.match.params.linkedinpostid);
    setPost(response.fields);
  };

  const fetchWriter = async () => {
    const res = await client.getEntry(props.match.params.linkedinpostid);
    setWriter(res.fields.writer.fields);
  };

  const fetchEditor = async () => {
    const res = await client.getEntry(props.match.params.linkedinpostid);
    setEditor(res.fields.editor.fields);
  };

  function DocumentShowing() {
    if (post.documentUrl === undefined) {
      return <Paragraph>Document not added.</Paragraph>;
    } else {
      return (
        <a href={`${post.documentUrl}`}>
          <Paragraph>{post.documentUrl}</Paragraph>
        </a>
      );
    }
  }

  return (
    <div>
      <div style={BackgroundHead}>
        <Document>
          <Container>
            <Header>
              <Row>
                <Col sm="12" lg="9">
                  <D3>{post.postTitle}</D3>
                  <Status>
                    <H4>
                      Status:{" "}
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
                </Col>
                <Col sm="12" lg="3">
                  <PostDate>
                    <H4>Post Date:</H4>
                    <Paragraph>
                      {moment(post.postDate).calendar(null, {
                        sameDay: "[Today]",
                        lastDay: "[Yesterday]",
                        lastWeek: "[Last] dddd",
                        sameElse: "MMM Do YYYY, h:mm:ss a"
                      })}
                    </Paragraph>
                  </PostDate>
                </Col>
              </Row>
              <Row>
                <Col>
                  <H4 style={M40}>Question URL:</H4>
                  <a href={`${post.questionUrl}`}>
                    <Paragraph>{post.questionUrl}</Paragraph>
                  </a>
                  <H4 style={M40}>Document URL:</H4>
                  <DocumentShowing />
                  <H4 style={M40}>Writer:</H4>
                  <Paragraph>{writer.fullName}</Paragraph>
                  <H4 style={M40}>Editor:</H4>
                  <Paragraph>{editor.fullName}</Paragraph>
                </Col>
              </Row>
            </Header>
          </Container>
        </Document>
      </div>
    </div>
  );
};

export default withRouter(LinkedInPost);
