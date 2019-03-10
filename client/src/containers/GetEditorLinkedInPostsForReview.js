import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query GetEditorLinkedInPostsForReview($id: String!) {
    getEditorLinkedInPostsForReview(id: $id) {
      id
      clientName
      clientId
      clientAuth0Id
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

const GetEditorLinkedInPostsForReview = props => (
  <Query query={query} variables={{ id: props.writerAuth0Id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetEditorLinkedInPostsForReview;
