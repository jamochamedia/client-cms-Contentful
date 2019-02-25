/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import moment from "moment";

import { D3 } from "../../components/Typography/DisplayText";
import { H4 } from "../../components/Typography/HeaderText";
import { Paragraph } from "../../components/Typography/ParapgraphText";

import GetClientSingleLinkedInPost from "../../../containers/GetClientSingleLinkedInPost";

import DocumentShowing from "../../components/Logic/LinkedInPost/DocumentShowing";
import QuestionShowing from "../../components/Logic/LinkedInPost/QuestionShowing";
import LinkedInURLShowing from "../../components/Logic/LinkedInPost/LinkedInUrlShowing";

//Styles
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  padding: 3%;
`;

const Status = styled.div`
  margin: 10px 0 20px 0;
  padding: 10px;
  background-color: #50899147;
  border-radius: 10px;
  width: 47%;
  min-width: 290px;
`;

const PostDate = styled.div`
  padding: 10px;
  background-color: #0ad19847;
  border-radius: 10px;
`;

const M40 = {
  marginTop: "40px"
};

const M30 = {
  marginTop: "30px"
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
  white-space: normal;
  overflow: hidden;
`;

const LinkedInPost = props => {
  const linkedInPostId = props.match.params.linkedinpostid;

  return (
    <GetClientSingleLinkedInPost linkedInPostId={linkedInPostId}>
      {data => {
        const fields = data.getClientSingleLinkedInPost;
        return (
          <div style={BackgroundHead}>
            <Document>
              <Container>
                <Header>
                  <Row>
                    <Col sm="12" lg="9">
                      <D3>{fields.postTitle}</D3>
                      <Status>
                        <H4>
                          Status:{" "}
                          <span
                            style={{
                              color:
                                fields.status === "Question Sent"
                                  ? "#9106e8"
                                  : fields.status === "In Writing"
                                  ? "#00db62"
                                  : fields.status === "In Editing"
                                  ? "#dea700"
                                  : fields.status === "In Client Review"
                                  ? "#e03404"
                                  : fields.status === "Ready for Post"
                                  ? "#01a6ff"
                                  : fields.status === "Posted"
                                  ? "#ff9900"
                                  : fields.status === "Not Posting"
                                  ? "#000000"
                                  : "#5a5f66"
                            }}
                          >
                            &#x25C9; {fields.status}
                          </span>
                        </H4>
                      </Status>
                    </Col>
                    <Col sm="12" lg="3">
                      <PostDate>
                        <H4>Post Date:</H4>
                        <Paragraph>
                          {moment(fields.postDate).calendar(null, {
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
                      <H4 style={M40}>
                        Question (Answer The Question In This Document):
                      </H4>
                      <QuestionShowing
                        answerUrl={fields.answerUrl}
                        question={fields.question}
                      />
                      <H4 style={M30}>Post Document:</H4>
                      <DocumentShowing documentUrl={fields.documentUrl} />
                      <H4 style={M40}>LinkedIn Post URL:</H4>
                      <LinkedInURLShowing linkedInUrl={fields.linkedInUrl} />
                      <H4 style={M40}>Writer:</H4>
                      <Paragraph>{fields.writer}</Paragraph>
                      <H4 style={M30}>Editor:</H4>
                      <Paragraph>{fields.writer}</Paragraph>
                    </Col>
                  </Row>
                </Header>
              </Container>
            </Document>
          </div>
        );
      }}
    </GetClientSingleLinkedInPost>
  );
};

export default withRouter(LinkedInPost);
