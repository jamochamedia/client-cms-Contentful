const contentfulClientToGraphqlClient = require("./ContentfulFunctions/contentfulClientToGraphqlClient");
const contentfulPosttoGraphqlPost = require("./ContentfulFunctions/contentfulPostToGraphqlPost");

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
      console.log(clientPosts);
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
    getAllWriters: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "writer"
      });
      const writers = response.items;
      console.log(writers);
    },
    getAllQuestions: async (_, __, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntries({
        content_type: "question"
      });
      const question = response.items;
      console.log(question);
    }
  }
};

module.exports = resolvers;
