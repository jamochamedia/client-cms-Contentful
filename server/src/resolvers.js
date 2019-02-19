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
      console.log(posts);

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
    }
    // linkedInPost: async (_, { id }, context) => {
    //   const db = context.db;
    //   const linkedInPost = await db("linkedInPost").where("id", id);
    //   return linkedInPost[0];
    // },
    // getClient: async (_, { id }, context) => {
    //   const db = context.db;
    //   const clients = await db("clients").where("id", id);
    //   return clients[0];
    // }
  }
};

module.exports = resolvers;
