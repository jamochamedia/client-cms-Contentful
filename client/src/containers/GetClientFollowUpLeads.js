import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientFollowUpLeads($id: String!) {
    getClientFollowUpLeads(id: $id) {
      id
      analyticsId
      fullName
      companyName
      role
      date
      messageLink
      rating
    }
  }
`;

const GetClientFollowUpLeads = props => (
  <Query query={query} variables={{ id: props.analyticsId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return props.children(data);
    }}
  </Query>
);

export default GetClientFollowUpLeads;
