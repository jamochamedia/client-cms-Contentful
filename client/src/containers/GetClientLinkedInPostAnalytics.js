import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientLinkedInPostAnalytics($id: String!) {
    getClientLinkedInPostAnalytics(id: $id) {
      id
      clientName
      clientAuth0Id
      postTitle
      postLink
      likes
      comments
      shares
      postViews24
      postViews72
      postViews1Week
    }
  }
`;

const GetClientLinkedInPostAnalytics = props => (
  <Query query={query} variables={{ id: props.auth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetClientLinkedInPostAnalytics;
