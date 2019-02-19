import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClient($id: Int!) {
    getClient(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

const GetAllClients = props => (
  <Query query={query} variables={{ id: props.clientId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetAllClients;
