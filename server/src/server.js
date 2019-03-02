const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const contentful = require("contentful");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const contentfulClient = contentful.createClient({
  space: "le3jnclmcpxu",
  accessToken:
    "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966"
});

const auth0Client = {
  audience: "<tqieceTsEIowUTJGkFw3QzYXVxn218m1>",
  issuer: `https://jamocha.auth0.com/`,
  algorithms: ["RS256"]
};

const userClient = jwksClient({
  jwksUri: `https://jamocha.auth0.com/.well-known/jwks.json`
});

function getKey(header, cb) {
  userClient.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, auth0Client, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded.email);
      });
    });
    return { user, contentfulClient };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
