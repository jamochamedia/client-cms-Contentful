import React from "react";
import { Redirect } from "react-router-dom";

import { client } from "../../utils/client";
import { areAuthItemsSet } from "../../utils/Auth/Auth";

import InvoiceItem from "./Invoices/InvoiceItem";

class Invoices extends React.Component {
  state = {
    invoices: []
  };

  client = client;

  componentDidMount() {
    this.fetchInvoices().then(this.setInvoices);
  }

  fetchInvoices = () =>
    this.client.getEntries({
      content_type: "invoice"
    });

  setInvoices = response => {
    this.setState({
      invoices: response.items
    });
  };

  render() {
    const { invoices } = this.state;

    return (
      <div>
        {!areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <div>
            ><p>All Invoices</p>
            {invoices.map((invoices, i) => (
              <InvoiceItem key={i} {...invoices} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Invoices;
