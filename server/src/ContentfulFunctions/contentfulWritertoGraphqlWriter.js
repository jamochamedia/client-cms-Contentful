/**
 * Contentful Employee
 **/
const exampleWriter = {
  sys: {
    contentType: { sys: [Object] },
    createdAt: "2019-01-22T20:33:57.584Z",
    environment: { sys: [Object] },
    id: "3sHD788PTtKGNDdOJHkTHe",
    locale: "en-US",
    revision: 1,
    space: { sys: [Object] },
    type: "Entry",
    updatedAt: "2019-01-22T20:33:57.584Z"
  },
  fields: {
    auth0Id: "email|5c477bcce8fd56b4e59748d5",
    description: "Conner Douglass is a developer with Jamocha Media.",
    fullName: "Conner Douglass (Developer Account)",
    linkedInUrl: "www.linkedin.com",
    position: "Writer"
  }
};

function contentfulWritertoGraphqlWriter(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    fullName: contentfulClient.fields.fullName,
    position: contentfulClient.fields.position,
    linkedInUrl: contentfulClient.fields.linkedInUrl,
    description: contentfulClient.fields.description,
    auth0Id: contentfulClient.fields.auth0Id
  };
}

module.exports = contentfulWritertoGraphqlWriter;
