const { ApolloServer, gql } = require("apollo-server");
const { find, filter } = require("lodash");
const knex = require("knex");

const dbConfig = require("../knexfile");

const writers = [
  {
    id: 1,
    firstName: "Mehak",
    lastName: "Vohra",
    linkedInUrl: "www.linkedin.com"
  },
  {
    id: 2,
    firstName: "Chelsea",
    lastName: "Alves",
    linkedInUrl: "www.linkedin.com"
  },
  {
    id: 3,
    firstName: "Mackenna",
    lastName: "Wilsey",
    linkedInUrl: "www.linkedin.com"
  }
];

const editors = [
  {
    id: 1,
    firstName: "Bud",
    lastName: "Hennekes",
    linkedInUrl: "www.linkedin.com"
  },
  {
    id: 2,
    firstName: "Chelsea",
    lastName: "Alves",
    linkedInUrl: "www.linkedin.com"
  },
  {
    id: 3,
    firstName: "Mehak",
    lastName: "Vohra",
    linkedInUrl: "www.linkedin.com"
  }
];

const typeDefs = gql`
  type Client {
    id: Int!
    firstName: String!
    lastName: String!
    linkedInPosts: [LinkedInPost]!
    linkedInUrl: String!
  }

  type Writer {
    id: Int!
    firstName: String!
    lastName: String!
    position: String!
    linkedInPosts: [LinkedInPost]!
    linkedInUrl: String!
  }

  type Editor {
    id: Int!
    firstName: String!
    lastName: String!
    position: String!
    linkedInPosts: [LinkedInPost]!
    linkedInUrl: String!
  }

  type LinkedInPost {
    id: Int!
    client: Client!
    title: String!
    status: String!
    question: String!
    url: String!
    writer: Writer!
    editor: Editor!
    date: String!
  }

  type Query {
    linkedInPosts: [LinkedInPost!]!
    linkedInPost(id: Int!): LinkedInPost!
    getClient(id: Int!): Client!
    getAllClients: [Client!]!
  }

  type Mutation {
    addLinkedInPost(
      id: Int!
      client: Int!
      title: String!
      status: String!
      question: String!
      url: String!
      writerId: Int!
      editorId: Int!
      date: String!
    ): LinkedInPost!
  }
`;

let linkedin_post_id = 5;
let writer_id = 3;
let editor_id = 2;
let client_id = 2;

const resolvers = {
  Query: {
    linkedInPosts: async (_, { id }, context) => {
      linkedInPosts;
    },
    linkedInPost: async (_, { id }, context) => {
      const db = context.db;
      const linkedInPost = await db("linkedInPost").where("id", id);
      return linkedInPost[0];
    },
    getClient: async (_, { id }, context) => {
      const db = context.db;
      const clients = await db("clients").where("id", id);
      return clients[0];
    },
    getAllClients: async (_, __, { db }) => {
      const clients = await db("clients").where({});
      return clients;
    }
  },
  Mutation: {
    addLinkedInPost: (
      _,
      { clientId, title, status, question, url, date, writerId, editorId }
    ) => {
      linkedin_post_id++;

      const newLinkedInPost = {
        id: linkedin_post_id,
        client_id,
        title,
        status,
        question,
        url,
        date,
        writer_id,
        editor_id
      };

      linkedInPosts.push(newLinkedInPost);
      return newLinkedInPost;
    }
  },
  Client: {
    linkedInPosts: async (obj, _, { db }) => {
      const clientId = obj.id;
      console.log("hi", clientId);
      console.log("yo1");
      const linkedInPostsForClient = await db("linkedInPost").where(
        "clientId",
        clientId
      );
      console.log("yo2 ");
      console.log(linkedInPostsForClient);

      return linkedInPostsForClient;
    }
  },
  Writer: {
    linkedInPosts: writer => filter(linkedInPosts, { writerId: writer.id })
  },
  Editor: {
    linkedInPosts: editor => filter(linkedInPosts, { editorId: editor.id })
  },
  LinkedInPost: {
    client: async (obj, _, { db }) => {
      console.log(obj);
      const clients = await db("clients").where("id", obj.clientId);
      console.log(clients);
      return clients[0];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const db = knex(dbConfig);
    return { db };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
