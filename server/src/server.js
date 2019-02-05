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
    client(id: Int!): Client!
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
    linkedInPosts: () => linkedInPosts,
    linkedInPost: async (_, { id }, context) => {
      const db = context.db;
      const linkedInPost = await db("linkedInPost").where("id", id);
      return linkedInPost[0];
    },
    client: async (_, { id }, context) => {
      const db = context.db;
      const clients = await db("clients").where("id", id);
      return clients[0];
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
    linkedInPosts: client => filter(linkedInPosts, { clientId: client.id })
  },
  Writer: {
    linkedInPosts: writer => filter(linkedInPosts, { writerId: writer.id })
  },
  Editor: {
    linkedInPosts: editor => filter(linkedInPosts, { editorId: editor.id })
  },
  LinkedInPost: {
    client: linkedInPost => find(clients, { id: linkedInPost.clientId })
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
