import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query getClientInvoices($id: String!) {
    getClientInvoices(id: $id) {
      id
      invoiceId
      clientName
      clientId
      subject
      amount
      issueDate
      dueDate
      stripeUrl
      status
    }
  }
`;

const GetClientInvoices = props => (
  <Query query={query} variables={{ id: props.clientId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetClientInvoices;
