/**
 * Contentful Lead Analytics
 **/
[
  {
    sys: {
      space: [Object],
      id: "34s2vNk5DClxyjZZSBvFGM",
      type: "Entry",
      createdAt: "2019-03-03T01:46:47.430Z",
      updatedAt: "2019-03-03T01:46:47.430Z",
      environment: [Object],
      revision: 1,
      contentType: [Object],
      locale: "en-US"
    },
    fields: {
      clientName: "Mehak Vohra",
      client: [Object],
      sentRequests: "300",
      acceptedRequests: "150",
      messagesReceived: "10"
    }
  }
];

function contentfulLAtoGraphqlLA(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.clientName,
    clientId: contentfulClient.fields.client.sys.id,
    clientRole: contentfulClient.fields.client.fields.clientRole,
    clientCompany: contentfulClient.fields.client.fields.companyName,
    sentRequests: contentfulClient.fields.sentRequests,
    acceptedRequests: contentfulClient.fields.acceptedRequests,
    messagesReceived: contentfulClient.fields.messagesReceived,
    qualifiedLeads: contentfulClient.fields.qualifiedLeads
  };
}

module.exports = contentfulLAtoGraphqlLA;
