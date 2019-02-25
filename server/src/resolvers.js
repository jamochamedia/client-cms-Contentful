const contentfulClientToGraphqlClient = require("./ContentfulFunctions/contentfulClientToGraphqlClient");
const contentfulPosttoGraphqlPost = require("./ContentfulFunctions/contentfulPostToGraphqlPost");
const contentfulInvoiceToGraphqlInvoice = require("./ContentfulFunctions/contentfulInvoiceToGraphqlInvoice");

const resolvers = {
  Query: {
    linkedInPosts: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "linkedInTextPost"
      });
      const posts = response.items;
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      return graphqlPosts;
    },
    getClientLinkedInPosts: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "linkedInTextPost"
      });
      const posts = response.items;
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      const clientPosts = graphqlPosts.filter(
        post => post.clientId !== undefined && post.clientId === id
      );
      return clientPosts;
    },
    linkedInPost: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphQlLinkedInPosts = contentfulPosttoGraphqlPost(response);
      return graphQlLinkedInPosts;
    },
    getAllClients: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "clientIdentifier"
      });
      const clients = response.items;
      const graphqlClients = clients.map(contentfulClientToGraphqlClient);
      return graphqlClients;
    },
    getClient: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphQlClient = contentfulClientToGraphqlClient(response);
      return graphQlClient;
    },
    getAllInvoices: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "invoice"
      });
      const invoices = response.items;
      const graphqlInvoices = invoices.map(contentfulInvoiceToGraphqlInvoice);
      return graphqlInvoices;
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
      //todo graphql api
      return writers;
    },
    getAllQuestions: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "question"
      });
      const question = response.items;
      //todo graphql api
      return question;
    }
  }
};

module.exports = resolvers;
