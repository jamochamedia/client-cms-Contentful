const { ApolloServer } = require("apollo-server-express");
const contentful = require("contentful");
const express = require("express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

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

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }),
  () => console.log(`🚀 Server is ready at ${server.url}`);
