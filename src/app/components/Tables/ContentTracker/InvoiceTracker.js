import React, { Component } from "react";
import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils/client";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Invoice = {
  color: "#292f36"
};

//Create component
class InvoiceTracker extends Component {
  state = {
    invoices: []
  };

  client = client;

  componentDidMount() {
    this.fetch().then(this.setInvoices);
  }

  fetch = () =>
    this.client.getEntries({
      content_type: "invoice"
    });

  setInvoices = response => {
    this.setState({
      invoices: response.items.map(item => item)
    });
  };

  render() {
    const { invoices } = this.state;

    const filterInvoices = invoices.filter(
      invoice =>
        invoice.fields.client.fields.clientName === this.props.clientName
    );

    console.log(filterInvoices);

    return (
      <div>
        <ReactTable
          data={filterInvoices}
          columns={[
            {
              Header: <H3>Invoices</H3>,
              headerClassName: "table-header",
              columns: [
                {
                  Header: <H5>INVOICE ID</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.invoiceId",
                  Cell: cell => (
                    <a style={Invoice} href={`#`}>
                      <Paragraph>{cell.value}</Paragraph>
                    </a>
                  )
                },
                {
                  Header: <H5>SUBJECT</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.subject",
                  Cell: cell => (
                    <div>
                      <Paragraph>{cell.value}</Paragraph>
                    </div>
                  )
                },
                {
                  Header: <H5>ISSUED</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.issueDate",
                  Cell: cell => (
                    <div>
                      <Paragraph>{cell.value}</Paragraph>
                    </div>
                  )
                },
                {
                  Header: <H5>DUE DATE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.dueDate",
                  Cell: cell => (
                    <div>
                      <Paragraph>{cell.value}</Paragraph>
                    </div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={5}
        />
      </div>
    );
  }
}

export default InvoiceTracker;
