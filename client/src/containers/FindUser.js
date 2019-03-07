import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query FindUser($id: String!) {
    findUser(id: $id) {
      id
      clientName
      companyName
      auth0Id
    }
  }
`;

const FindUser = props => (
  <Query query={query} variables={{ id: props.auth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default FindUser;
