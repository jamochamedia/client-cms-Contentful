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
    auth0Id: String
  }

  type Writer {
    id: String
    fullName: String
    position: String
    linkedInUrl: String
    description: String
  }

  type Editor {
    id: Int!
    firstName: String!
    lastName: String!
    position: String!
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
    writerId: String
    editor: String
    editorId: String
    postDate: String
  }

  type Invoice {
    id: String!
    invoiceId: String!
    clientName: String
    clientId: String
    subject: String
    amount: String
    issueDate: String
    dueDate: String
    stripeUrl: String
    status: String
  }

  type Question {
    question: String
    clientName: String
    category: String
    notes: String
  }

  type Query {
    getAllClients: [Client!]!
    getAllLinkedInPosts: [LinkedInPost!]!
    getAllWriters: [Writer!]!
    getAllQuestions: [Question!]!
    getClientSingleLinkedInPost(id: String!): LinkedInPost!
    getClient(id: String!): Client!
    getAuth0Client(id: String!): Client!
    getClientLinkedInPosts(id: String!): [LinkedInPost!]!
    getAllInvoices: [Invoice!]!
    getClientInvoices(id: String!): [Invoice!]!
    getWriter(id: String!): Writer!
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
