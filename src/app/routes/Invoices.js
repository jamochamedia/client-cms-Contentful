import React from "react";
import { client } from "../../utils/client";
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
        <p>All Invoices</p>
        {invoices.map((invoices, i) => (
          <InvoiceItem key={i} {...invoices} />
        ))}
      </div>
    );
  }
}

export default Invoices;
