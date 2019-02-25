import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    getAllLinkedInPosts {
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

const GetAllLinkedInPosts = props => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(props.children(data));
      return props.children(data);
    }}
  </Query>
);

export default GetAllLinkedInPosts;
