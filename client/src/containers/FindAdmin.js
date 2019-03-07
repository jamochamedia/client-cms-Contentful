import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query FindAdmin($id: String!) {
    findAdmin(id: $id) {
      id
      fullName
      auth0Id
    }
  }
`;

const FindAdmin = props => (
  <Query query={query} variables={{ id: props.auth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default FindAdmin;
