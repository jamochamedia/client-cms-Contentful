const { ApolloServer } = require("apollo-server");
const contentful = require("contentful");

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
    return {
      headers: req.headers,
      contentfulClient
    };
  }
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
