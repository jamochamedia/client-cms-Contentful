const { gql } = require("apollo-server");

const typeDefs = gql`
  type Client {
    id: String!
    auth0Id: String
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
    id: String
    auth0Id: String
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
    clientAuth0Id: String
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

  type LeadAnalytics {
    id: String!
    clientAuth0Id: String!
    clientName: String!
    clientId: String!
    clientRole: String!
    clientCompany: String!
    postQuota: String
    postedPosts: String
    sentRequests: String
    acceptedRequests: String
    messagesReceived: String
    qualifiedLeads: String
  }

  type FollowUpLead {
    id: String!
    analyticsId: String
    fullName: String
    companyName: String
    role: String
    date: String
    messageLink: String
    rating: Int
  }

  type Query {
    getAllClients: [Client!]!
    getAllLinkedInPosts: [LinkedInPost!]!
    getAllWriters: [Writer!]!
    getAllQuestions: [Question!]!
    getClientSingleLinkedInPost(id: String!): LinkedInPost!
    getClient(id: String!): Client!
    findUser(id: String!): Client!
    findAdmin(id: String!): Writer!
    getClientLinkedInPosts(id: String!): [LinkedInPost!]!
    getClientLinkedInPostsForReview(id: String!): [LinkedInPost!]!
    getAllInvoices: [Invoice!]!
    getClientInvoices(id: String!): [Invoice!]!
    getWriter(id: String!): Writer!
    getAllLeadAnalytics: [LeadAnalytics!]!
    getClientLeadAnalytics(id: String!): LeadAnalytics!
    findClientLeadPage(id: String!): LeadAnalytics!
    getAllFollowUpLeads: [FollowUpLead!]!
    getClientFollowUpLeads(id: String!): [FollowUpLead!]!
  }
`;

module.exports = typeDefs;
