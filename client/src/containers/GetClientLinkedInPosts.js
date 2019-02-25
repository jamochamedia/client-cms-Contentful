import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientLinkedInPosts($id: String!) {
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
      writerId
      editor
      editorId
      postDate
    }
  }
`;

const GetClientLinkedInPosts = props => (
  <Query query={query} variables={{ id: props.clientId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetClientLinkedInPosts;
