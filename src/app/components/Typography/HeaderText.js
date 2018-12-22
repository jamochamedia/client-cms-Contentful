import styled from "styled-components";

export const H1 = styled.h1`
  color: #292f36;
  font-size: 1.625rem;
  font-weight: 600;
  padding: 10px 10px 10px 0;
  text-align: ${props => props.textAlign};
  margin-bottom: 0;
  line-height: 1.5;
`;

export const H2 = styled.h2`
  color: #292f36;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 10px 10px 10px 0;
  text-align: ${props => props.textAlign};
  margin-bottom: 0;
  line-height: 1.5;
`;

export const H3 = styled.h3`
  color: #292f36;
  font-size: 1.06rem;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  line-height: 1.5;
  margin: 0px;
`;

export const H4 = styled.h4`
  color: #292f36;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  line-height: 1.5;
  margin: 0px;
`;

export const H5 = styled.h5`
  color: #292f36;
  font-size: 0.8125rem;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  line-height: 1.5;
  margin: 0px;
`;

export const H6 = styled.h6`
  color: #292f36;
  font-size: 0.625rem;
  font-weight: 600;
  text-align: ${props => props.textAlign};
  line-height: 1.5;
  margin: 0px;
`;
