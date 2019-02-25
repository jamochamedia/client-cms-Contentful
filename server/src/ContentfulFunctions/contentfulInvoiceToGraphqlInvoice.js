/**
 * Contentful Invoice
 **/
const exampleInvoice = {
  sys: {
    createdAt: "2019-01-02T23:21:18.038Z",
    id: "53rNpbekuQa60kIsgM4U8a",
    locale: "en-US",
    revision: 2,
    type: "Entry",
    updatedAt: "2019-01-30T08:10:40.786Z"
  },
  fields: {
    amount: "2,000",
    client: { sys: [Object], fields: [Object] },
    clientName: "Philip Papendieck",
    dueDate: "January 17th, 2018",
    invoiceId: "87E30EE-0001",
    issueDate: "January 2nd, 2018",
    status: "paid",
    stripeUrl:
      "https://pay.stripe.com/invoice/invst_Hztsdz0Zytyq3RzjZ5u9Tx3PN3",
    subject: "LinkedIn Elite Program (January)"
  }
};

function contentfulInvoiceToGraphqlInvoice(contentfulClient) {
  return {
    id: contentfulClient.sys.id,
    clientName: contentfulClient.fields.clientName,
    clientId: contentfulClient.fields.client.sys.id,
    subject: contentfulClient.fields.subject,
    amount: contentfulClient.fields.amount,
    issueDate: contentfulClient.fields.issueDate,
    dueDate: contentfulClient.fields.dueDate,
    stripeUrl: contentfulClient.fields.stripeUrl,
    status: contentfulClient.fields.status,
    invoiceId: contentfulClient.fields.invoiceId
  };
}

module.exports = contentfulInvoiceToGraphqlInvoice;
