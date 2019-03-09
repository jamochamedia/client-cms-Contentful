/**
 * Contentful singularContentAnalytics
 **/

const examplePostAnalytics = {
  sys: {
    space: [Object],
    id: "3S70iRb4JAqWP1oL2fti8G",
    type: "Entry",
    createdAt: "2019-03-08T07:49:16.022Z",
    updatedAt: "2019-03-08T07:50:45.343Z",
    environment: [Object],
    revision: 2,
    contentType: [Object],
    locale: "en-US"
  },
  fields: {
    client: [Object],
    post: [Object],
    postTitle: "A POST TITLE",
    postLink: "http://localhost:3000/",
    likes: "200",
    comments: "150",
    shares: "5",
    postViews24: "8,000",
    postViews72: "21,000",
    postViews1Week: "45,000"
  }
};

function contentfulLIPAtoGraphqlLIPA(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.client.fields.clientName,
    clientAuth0Id: contentfulClient.fields.client.fields.auth0Id,
    postTitle: contentfulClient.fields.postTitle,
    postLink: contentfulClient.fields.postLink,
    likes: contentfulClient.fields.likes,
    comments: contentfulClient.fields.comments,
    shares: contentfulClient.fields.shares,
    postViews24: contentfulClient.fields.postViews24,
    postViews72: contentfulClient.fields.postViews72,
    postViews1Week: contentfulClient.fields.postViews1Week
  };
}

module.exports = contentfulLIPAtoGraphqlLIPA;
