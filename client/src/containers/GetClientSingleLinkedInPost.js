import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetClientSingleLinkedInPost($id: String!) {
    getClientSingleLinkedInPost(id: $id) {
      id
      clientName
      clientId
      postTitle
      question
      answerUrl
      documentUrl
      status
      writer
      writerId
      editor
      editorId
      postDate
    }
  }
`;

const GetClientSingleLinkedInPost = props => (
  <Query query={query} variables={{ id: props.linkedInPostId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(props.linkedInPostId);
      return props.children(data);
    }}
  </Query>
);

export default GetClientSingleLinkedInPost;
