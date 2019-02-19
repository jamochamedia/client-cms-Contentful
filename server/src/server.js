const { ApolloServer, gql } = require("apollo-server");
const { find, filter } = require("lodash");
const knex = require("knex");
const contentful = require("contentful");

const dbConfig = require("../knexfile");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const contentfulClient = contentful.createClient({
  space: "le3jnclmcpxu",
  accessToken:
    "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966"
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const db = knex(dbConfig);
    return { db, contentfulClient };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
