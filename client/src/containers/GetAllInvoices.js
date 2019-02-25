import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    getAllInvoices {
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

const GetAllInvoices = props => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return props.children(data);
    }}
  </Query>
);

export default GetAllInvoices;
