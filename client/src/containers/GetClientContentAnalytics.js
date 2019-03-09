import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientContentAnalytics($id: String!) {
    getClientContentAnalytics(id: $id) {
      id
      clientName
      clientAuth0Id
      postQuota
      postedPosts
      lifetimeViews
      viewsThisMonth
    }
  }
`;

const GetClientContentAnalytics = props => (
  <Query query={query} variables={{ id: props.auth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetClientContentAnalytics;
