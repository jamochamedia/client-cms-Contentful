import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetWriter($id: String!) {
    getWriter(id: $id) {
      id
      fullName
      position
      linkedInUrl
      description
    }
  }
`;

const GetWriter = props => (
  <Query query={query} variables={{ id: props.writerId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetWriter;
