const { gql } = require("apollo-server");

const typeDefs = gql`
  type Client {
    id: String!
    clientName: String!
    companyName: String!
    linkedInUrl: String!
    billingEmail: String!
    email: String!
    clientRole: String!
    clientDescription: String!
    linkedInPosts: [LinkedInPost]!
  }

  type Writer {
    id: Int!
    firstName: String!
    lastName: String!
    position: String!
    linkedInPosts: [LinkedInPost]!
    linkedInUrl: String!
  }

  type Editor {
    id: Int!
    firstName: String!
    lastName: String!
    position: String!
    linkedInPosts: [LinkedInPost]!
    linkedInUrl: String!
  }

  type LinkedInPost {
    id: String!
    clientName: String
    postTitle: String
    status: String
    question: String
    answerUrl: String
    documentUrl: String
    writer: Writer
    editor: Editor
    postDate: String
  }

  type Query {
    linkedInPosts: [LinkedInPost!]!
    linkedInPost(id: Int!): LinkedInPost!
    getClient(id: String!): Client!
    getAllClients: [Client!]!
  }

  type Mutation {
    addLinkedInPost(
      id: Int!
      client: Int!
      title: String!
      status: String!
      question: String!
      url: String!
      writerId: Int!
      editorId: Int!
      date: String!
    ): LinkedInPost!
  }
`;

module.exports = typeDefs;
