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
      // console.log(posts);
      const graphqlPosts = posts.map(contentfulPosttoGraphqlPost);
      return graphqlPosts;
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
    },
    linkedInPost: async (_, { id }, context) => {
      const db = context.db;
      const linkedInPost = await db("linkedInPost").where("id", id);
      return linkedInPost[0];
    },
    getClient: async (_, { id }, context) => {
      const contentfulClient = context.contentfulClient;
      const response = await contentfulClient.getEntry(id);
      const graphQlClient = contentfulClientToGraphqlClient(response);
      console.log(graphQlClient);
      console.log(graphQlClient.companyName);
      return graphQlClient;
    }
  }
};

module.exports = resolvers;
