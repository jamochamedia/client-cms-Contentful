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

const exampleQuestion = {
  sys: {
    space: [Object],
    id: "1VG7g6fHO8Ke6gGQewWqWm",
    type: "Entry",
    createdAt: "2019-01-11T07:46:55.211Z",
    updatedAt: "2019-01-11T07:46:55.211Z",
    environment: [Object],
    revision: 1,
    contentType: [Object],
    locale: "en-US"
  },
  fields: {
    question:
      "What advice do VCs want to give founders during pitches, but refrain from?",
    client: [Array],
    category: "Venture Capital"
  }
};

function contentfulPostToGraphqlPost(contentfulClient) {
  const question = contentfulClient.fields.question || { fields: {} };
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.clientName.fields.clientName,
    clientId: contentfulClient.fields.clientName.sys.id,
    postTitle: contentfulClient.fields.postTitle,
    status: contentfulClient.fields.status,
    question: question.fields.question,
    answerUrl: contentfulClient.fields.answerUrl,
    documentUrl: contentfulClient.fields.documentUrl,
    writer: contentfulClient.fields.writer.fields.fullName,
    writerId: contentfulClient.fields.writer.sys.id,
    editor: contentfulClient.fields.editor.fields.fullName,
    editorId: contentfulClient.fields.editor.sys.id,
    postDate: contentfulClient.fields.postDate
  };
}

module.exports = contentfulPostToGraphqlPost;
