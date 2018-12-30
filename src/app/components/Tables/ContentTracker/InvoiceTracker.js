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

    return (
      <div className="Tracker">
        <ReactTable
          data={filterInvoices}
          noDataText="Loading..."
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
                    <a
                      style={Invoice}
                      href={`${cell.original.fields.stripeUrl}`}
                    >
                      <Paragraph>
                        <b>{cell.value}</b>
                      </Paragraph>
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
                },
                {
                  Header: <H5>STATUS</H5>,
                  headerClassName: "table-subheader",
                  id: "status",
                  accessor: "fields.status",
                  Cell: cell => (
                    <Paragraph>
                      <span>
                        <span
                          style={{
                            color:
                              cell.value === "paid"
                                ? "#ff9900"
                                : cell.value === "open"
                                ? "#00db62"
                                : cell.value === "uncollectible"
                                ? "#e03404"
                                : cell.value === "void"
                                ? "#717171"
                                : cell.value === "draft"
                                ? "#fbdf17"
                                : "#000"
                          }}
                        >
                          &#x25C9;
                        </span>
                        {cell.value === "open"
                          ? " Open"
                          : cell.value === "paid"
                          ? " Paid"
                          : cell.value === "uncollectible"
                          ? " Uncollectible"
                          : cell.value === "void"
                          ? " Void"
                          : cell.value === "draft"
                          ? " Draft"
                          : " Not Set"}
                      </span>
                    </Paragraph>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={5}
          style={{ height: "431px" }}
          showPagination={false}
        />
      </div>
    );
  }
}

export default InvoiceTracker;
