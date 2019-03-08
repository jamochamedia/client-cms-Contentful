import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query FindClientLeadPage($id: String!) {
    findClientLeadPage(id: $id) {
      id
      clientName
      clientAuth0Id
      postQuota
      postedPosts
      sentRequests
      qualifiedLeads
    }
  }
`;

const FindClientLeadPage = props => (
  <Query query={query} variables={{ id: props.auth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default FindClientLeadPage;
