/**
 * Contentful Client
 **/
const exampleClient = {
  sys: {
    space: { sys: [Object] },
    id: "4vnHRFO9bOUC2s0uIauYEa",
    type: "Entry",
    createdAt: "2019-01-11T07:19:03.403Z",
    updatedAt: "2019-01-14T07:07:33.720Z",
    environment: { sys: [Object] },
    revision: 2,
    contentType: { sys: [Object] },
    locale: "en-US"
  },
  fields: {
    profileImage: { sys: [Object], fields: [Object] },
    clientName: "Rohan Thakkar",
    companyName: "Orca Financial",
    auth0Id: "email|5c3c3112e8fd56b4e58065e9",
    linkedInUrl: "https://www.linkedin.com/in/rohanthakkar/",
    email: "rohan@orca.financial",
    clientRole: "CEO",
    clientDescription:
      "Helping Millennials Take Control of their Finances | Featured on Forbes, Thrive Global, and Huffington Post"
  }
};

function contentfulClientToGraphqlClient(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.clientName,
    companyName: contentfulClient.fields.companyName,
    linkedInUrl: contentfulClient.fields.linkedInUrl,
    email: contentfulClient.fields.email,
    clientRole: contentfulClient.fields.clientRole,
    clientDescription: contentfulClient.fields.clientDescription,
    auth0Id: contentfulClient.fields.auth0Id
  };
}

module.exports = contentfulClientToGraphqlClient;
