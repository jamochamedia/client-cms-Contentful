const contentfulClientToGraphqlClient = require("./ContentfulFunctions/contentfulClientToGraphqlClient");
const contentfulPosttoGraphqlPost = require("./ContentfulFunctions/contentfulPostToGraphqlPost");
const contentfulInvoiceToGraphqlInvoice = require("./ContentfulFunctions/contentfulInvoiceToGraphqlInvoice");
const contentfulWritertoGraphqlWriter = require("./ContentfulFunctions/contentfulWritertoGraphqlWriter");
const contentfulLAtoGraphqlLA = require("./ContentfulFunctions/contentfulLAtoGraphqlLA");
const contentfulLeadtoGraphqlLead = require("./ContentfulFunctions/contentfulLeadtoGraphqlLead");
const contentfulCAtoGraphqlCA = require("./ContentfulFunctions/contentfulCAtoGraphqlCA");

const resolvers = {
  Query: {
    getAllLinkedInPosts: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "linkedInTextPost"
      });
      const posts = response.items;
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      const filteredPosts = graphqlPosts.filter(
        post => post.status !== "Not Posting" && post.status !== "Posted"
      );
      return filteredPosts;
    },
    getClientLinkedInPosts: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "linkedInTextPost"
      });
      const posts = response.items;
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      const filteredPosts = graphqlPosts.filter(post => post.clientId === id);
      return filteredPosts;
    },
    getClientSingleLinkedInPost: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphQlLinkedInPosts = contentfulPosttoGraphqlPost(response);
      return graphQlLinkedInPosts;
    },
    getClientLinkedInPostsForReview: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "linkedInTextPost"
      });
      const posts = response.items;
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      const filteredPosts = graphqlPosts.filter(
        post => post.clientAuth0Id === id && post.status === "In Client Review"
      );
      return filteredPosts;
    },
    getAllClients: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "clientIdentifier"
      });
      const clients = response.items;
      const graphqlClients = clients.map(contentfulClientToGraphqlClient);
      const filteredClients = graphqlClients.filter(
        client => client.status !== "Not Active"
      );
      return filteredClients;
    },
    getClient: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphQlClient = contentfulClientToGraphqlClient(response);
      return graphQlClient;
    },
    findUser: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "clientIdentifier"
      });
      const clients = response.items;
      const graphqlClients = clients.map(contentfulClientToGraphqlClient);
      const filteredClient = graphqlClients.filter(
        client => client.auth0Id === id
      );
      return filteredClient[0];
    },
    findAdmin: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "writer"
      });
      const admins = response.items;
      const graphqlAdmins = admins.map(contentfulWritertoGraphqlWriter);
      const filteredAdmin = graphqlAdmins.filter(admin => admin.auth0Id === id);
      return filteredAdmin[0];
    },
    getAllInvoices: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "invoice"
      });
      const invoices = response.items;
      const graphqlInvoices = invoices.map(contentfulInvoiceToGraphqlInvoice);
      const filteredInvoices = graphqlInvoices.filter(
        invoice => invoice.status !== "paid"
      );
      return filteredInvoices;
    },
    getClientInvoices: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "invoice"
      });
      const invoices = response.items;
      const graphqlInvoices = invoices.map(contentfulInvoiceToGraphqlInvoice);
      const clientInvoices = graphqlInvoices.filter(
        post => post.clientId !== undefined && post.clientId === id
      );
      return clientInvoices;
    },
    getAllWriters: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "writer"
      });
      const writers = response.items;
      const graphqlWriters = writers.map(contentfulWritertoGraphqlWriter);
      return graphqlWriters;
    },
    getWriter: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphqlWriter = contentfulWritertoGraphqlWriter(response);
      return graphqlWriter;
    },
    getAllQuestions: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "question"
      });
      const question = response.items;
      //todo graphql api
      return question;
    },
    getAllLeadAnalytics: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "leadAnalytics"
      });
      const leadAnalytics = response.items;
      const graphqlLeadAnalytics = leadAnalytics.map(contentfulLAtoGraphqlLA);
      return graphqlLeadAnalytics;
    },
    getClientLeadAnalytics: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const grapqhlLA = contentfulLAtoGraphqlLA(response);
      return grapqhlLA;
    },
    findClientLeadPage: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "leadAnalytics"
      });
      const leadAnalytics = response.items;
      const graphqlLeadAnalytics = leadAnalytics.map(contentfulLAtoGraphqlLA);
      const filteredLeadAnalytics = graphqlLeadAnalytics.filter(
        client => client.clientAuth0Id === id
      );
      return filteredLeadAnalytics[0];
    },
    getAllFollowUpLeads: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "followUpLeads"
      });
      const leads = response.items;
      const graphqlLeads = leads.map(contentfulLeadtoGraphqlLead);
      return graphqlLeads;
    },
    getClientFollowUpLeads: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "followUpLeads"
      });
      const leads = response.items;
      const graphqlLeads = leads.map(contentfulLeadtoGraphqlLead);
      const filteredLeads = graphqlLeads.filter(
        lead => lead.analyticsId === id
      );
      return filteredLeads;
    },
    getAllContentAnalytics: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "overallContentAnalytics"
      });
      const contentAnalytics = response.items;
      const graphQlCA = contentAnalytics.map(contentfulCAtoGraphqlCA);
      console.log(graphQlCA);
      return graphQlCA;
    },
    getClientContentAnalytics: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "overallContentAnalytics"
      });
      const contentAnalytics = response.items;
      const graphQlCA = contentAnalytics.map(contentfulCAtoGraphqlCA);
      const filteredCA = graphQlCA.filter(
        client => client.clientAuth0Id === id
      );
      return filteredCA[0];
    }
  }
};

module.exports = resolvers;
