import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    getAdminLinkedInPostsForPost {
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

const GetAdminLinkedInPostsForPost = props => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetAdminLinkedInPostsForPost;
