/**
 * Contentful Lead
 **/
const exampleLead = {
  sys: {
    space: { sys: [Object] },
    id: "4ni38Eim4SbMVcWJ7bFN9i",
    type: "Entry",
    createdAt: "2019-03-03T09:33:24.450Z",
    updatedAt: "2019-03-03T09:33:24.450Z",
    environment: [Object],
    revision: 1,
    contentType: [Object],
    locale: "en-US"
  },
  fields: {
    fullName: "Jane Doe",
    client: [Object],
    companyName: "The Best Company",
    role: "CEO",
    date: "2019-03-13",
    messageLink:
      "https://www.linkedin.com/messaging/thread/6347535214541103104/",
    rating: 3
  }
};

function contentfulLeadtoGraphqlLead(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    analyticsId: contentfulClient.fields.client.sys.id,
    fullName: contentfulClient.fields.fullName,
    companyName: contentfulClient.fields.companyName,
    role: contentfulClient.fields.role,
    date: contentfulClient.fields.date,
    messageLink: contentfulClient.fields.messageLink,
    rating: contentfulClient.fields.rating
  };
}

module.exports = contentfulLeadtoGraphqlLead;
