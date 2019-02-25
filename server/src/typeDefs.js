const { gql } = require("apollo-server");

const typeDefs = gql`
  type Client {
    id: String!
    clientName: String!
    companyName: String!
    linkedInUrl: String!
    email: String!
    clientRole: String!
    clientDescription: String!
    linkedInPosts: [LinkedInPost]!
    billingEmail: String!
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
    clientId: String
    postTitle: String
    status: String
    question: String
    answerUrl: String
    documentUrl: String
    writer: String
    editor: String
    postDate: String
  }

  type Question {
    question: String
    clientName: String
    category: String
    notes: String
  }

  type Query {
    getAllClients: [Client!]!
    linkedInPosts: [LinkedInPost!]!
    getAllWriters: [Writer!]!
    getAllQuestions: [Question!]!
    linkedInPost(id: Int!): LinkedInPost!
    getClient(id: String!): Client!
    getClientLinkedInPosts(id: String!): [LinkedInPost!]!
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
