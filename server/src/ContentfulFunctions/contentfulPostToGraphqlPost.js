const exampleLinkedInPost = {
  sys: {
    space: [Object],
    id: "74qowypPsF9EvD0BrwqzCl",
    type: "Entry",
    createdAt: "2019-01-25T10:29:07.714Z",
    updatedAt: "2019-02-14T21:22:31.869Z",
    environment: [Object],
    revision: 16,
    contentType: [Object],
    locale: "en-US"
  },
  fields: {
    clientName: [Object],
    status: "Posted",
    writer: [Object],
    editor: [Object],
    postTitle: "Knowledge within Startups",
    postDate: "2019-02-14T00:00-08:00",
    question: [Object],
    answerUrl:
      "https://docs.google.com/document/d/11OWLmcNe38peL53antzdPjlyuUo4itcK1rt69o3mTE0/edit",
    documentUrl:
      "https://docs.google.com/document/d/1eiOrToPoqhC2FUzDx_06J_wSbJ8fzA4WoDlbRx2dsO8/edit?ts=5c5869a0"
  }
};

function contentfulPostToGraphqlPost(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    //clientName: contentfulPost.fields.clientName,
    status: contentfulClient.fields.status,
    //writer: contentfulPost.fields.writer,
    //editor: contentfulPost.fields.editor,
    postTitle: contentfulClient.fields.postTitle,
    postDate: contentfulClient.fields.postDate,
    //question: contentfulPost.fields.question,
    answerUrl: contentfulClient.fields.answerUrl,
    documentUrl: contentfulClient.fields.documentUrl
  };
}

module.exports = contentfulPostToGraphqlPost;
