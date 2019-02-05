import styled from "styled-components";
import React from "react";
import { D4 } from "../Typography/DisplayText";
import { H3, H4 } from "../Typography/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "reactstrap";

//TODO: WORK ON STYLES
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
  padding: 5px 30px 20px 30px;
`;

const DescriptionStyles = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
`;

const todo = {
  lineHeight: "2.5"
};

const white = {
  color: "#f1f1f1"
};

const title = {
  color: "#292f36",
  margin: "20px"
};

const done = {
  textDecoration: "line-through"
};

function FeaturesClientCard() {
  return (
    <div>
      <ProfileContainer>
        <ProfileImage>
          <D4 style={white}>
            <FontAwesomeIcon icon="list-ol" />
          </D4>
        </ProfileImage>
        <H3 style={title}>Upcoming Client Features</H3>
        <TextContainer>
          <DescriptionStyles>
            <Col lg={{ offset: 1 }}>
              <H4 style={(todo, done)}>
                <FontAwesomeIcon icon="check-square" /> Client and Writer
                Profiles
              </H4>
              <H4 style={(todo, done)}>
                <FontAwesomeIcon icon="check-square" /> Invoices for clients
              </H4>
              <H4 style={(todo, done)}>
                <FontAwesomeIcon icon="check-square" /> LinkedIn content tracker
              </H4>
              <H4 style={todo}>
                <FontAwesomeIcon icon="square" /> Content analytics
              </H4>
              <H4 style={todo}>
                <FontAwesomeIcon icon="square" /> Edit content in the app
              </H4>
            </Col>
          </DescriptionStyles>
        </TextContainer>
      </ProfileContainer>
    </div>
  );
}

export default FeaturesClientCard;
