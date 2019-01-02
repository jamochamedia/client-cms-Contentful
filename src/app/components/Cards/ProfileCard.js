import styled from "styled-components";
import React from "react";
import { D2 } from "../../components/Typography/DisplayText";
import { H3 } from "../../components/Typography/HeaderText";
import { Paragraph } from "../Typography/ParapgraphText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";

//TODO: WORK ON STYLES
const ProfileContainer = styled.div`
  width: 100%;
  min-height: 375px;
  background: linear-gradient(
    to bottom,
    #508991 0%,
    #508991 40%,
    #fff 40%,
    #fff 100%
  );
  border-radius: 0.375rem;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  padding-top: 40px;
  text-align: center;
`;

const ProfileImage = styled.div`
  border: 2px solid #f1f1f1;
  border-radius: 100%;
  width: 90px;
  height: 90px;
  background-color: #292f36;
  margin: 0 auto;
  padding: 8px;
`;

const TextContainer = styled.div`
  padding: 5px 30px 20px 30px;
`;

const DescriptionContainer = styled.div`
  margin-top: 50px;
`;

const white = {
  color: "#f1f1f1"
};

const title = {
  color: "#f1f1f1",
  marginTop: "20px",
  marginBottom: "20px"
};

function ProfileCard(props) {
  return (
    <div>
      <ProfileContainer>
        <ProfileImage>
          <D2 style={white}>
            <FontAwesomeIcon icon="briefcase" />
          </D2>
        </ProfileImage>
        <H3 style={title}>{props.role}</H3>
        <TextContainer>
          <DescriptionContainer>
            <Paragraph>
              <Markdown source={props.description} />
            </Paragraph>
          </DescriptionContainer>
        </TextContainer>
      </ProfileContainer>
    </div>
  );
}

export default ProfileCard;
