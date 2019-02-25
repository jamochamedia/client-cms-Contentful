import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query getClientLinkedInPosts($id: String!) {
    getClientLinkedInPosts(id: $id) {
      id
      clientName
      clientId
      postTitle
      status
      question
      answerUrl
      documentUrl
      writer
      editor
      postDate
    }
  }
`;

const GetClientLinkedInPosts = props => (
  <Query query={query} variables={{ id: props.clientId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(props.clientId);
      return props.children(data);
    }}
  </Query>
);

export default GetClientLinkedInPosts;
