import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientLeadAnalytics($id: String!) {
    getClientLeadAnalytics(id: $id) {
      id
      clientName
      clientId
      clientRole
      clientCompany
      sentRequests
      acceptedRequests
      messagesReceived
      qualifiedLeads
    }
  }
`;

const GetClientLeadAnalytics = props => (
  <Query query={query} variables={{ id: props.analyticsId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetClientLeadAnalytics;
