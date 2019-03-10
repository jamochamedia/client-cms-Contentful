import styled from "styled-components";
import React from "react";
import { D4 } from "../Typography/DisplayText";
import { H3, H4 } from "../Typography/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//TODO: Fix Styles
const ProfileContainer = styled.div`
  width: 100%;
  min-height: 350px;
  background: linear-gradient(
    to bottom,
    #e9ecef 0%,
    #e9ecef 180px,
    #fff 180px,
    #fff 100%
  );
  border-radius: 0.375rem;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  padding-top: 40px;
  text-align: center;
`;

const ProfileImage = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background-color: #292f36;
  margin: 0 auto;
  padding: 10px;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const DescriptionStyles = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
  line-height: 2.5;
  text-align: center;
`;

const white = {
  color: "#f1f1f1"
};

const title = {
  color: "#292f36",
  margin: "20px"
};

function HeaderCard(props) {
  return (
    <div>
      <ProfileContainer>
        <ProfileImage>
          <D4 style={white}>
            <FontAwesomeIcon icon={props.icon} />
          </D4>
        </ProfileImage>
        <H3 style={title}>{props.title}</H3>
        <TextContainer>
          <DescriptionStyles>
            <H4>{props.text}</H4>
          </DescriptionStyles>
        </TextContainer>
      </ProfileContainer>
    </div>
  );
}

export default HeaderCard;
