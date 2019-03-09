/**
 * Contentful Content
 **/
const exampleAnalytics = {
  sys: {
    space: [Object],
    id: "7kgwMSqgNsIZ0K1u41Io4U",
    type: "Entry",
    createdAt: "2019-03-08T07:47:12.161Z",
    updatedAt: "2019-03-08T07:47:48.319Z",
    environment: [Object],
    revision: 2,
    contentType: [Object],
    locale: "en-US"
  },
  fields: {
    client: [Object],
    clientName: "Mehak Vohra",
    postQuota: "4",
    postedPosts: "2",
    lifetimeViews: "10,000,000",
    viewsThisMonth: "120,000"
  }
};

function contentfulCAToGraphqlCA(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.clientName,
    clientAuth0Id: contentfulClient.fields.client.fields.auth0Id,
    postQuota: contentfulClient.fields.postQuota,
    postedPosts: contentfulClient.fields.postedPosts,
    mostRecentPostViews: contentfulClient.fields.mostRecentPostViews,
    lifetimeViews: contentfulClient.fields.lifetimeViews,
    lifetimeShares: contentfulClient.fields.lifetimeShares,
    lifetimeComments: contentfulClient.fields.lifetimeComments,
    lifetimeLikes: contentfulClient.fields.lifetimeLikes,
    viewsThisMonth: contentfulClient.fields.viewsThisMonth
  };
}

module.exports = contentfulCAToGraphqlCA;
