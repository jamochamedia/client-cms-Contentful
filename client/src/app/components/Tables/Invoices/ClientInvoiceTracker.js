import React from "react";
import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import GetClientInvoices from "../../../../containers/GetClientInvoices";

const Invoice = {
  color: "#292f36"
};

//Create component
const ClientInvoiceTracker = props => {
  const clientId = props.clientId;
  return (
    <GetClientInvoices clientId={clientId}>
      {data => {
        const invoices = data.getClientInvoices;
        return (
          <div className="Tracker">
            <ReactTable
              data={invoices}
              noDataText="Oh no! You don't have any invoices."
              columns={[
                {
                  Header: <H3>Invoices</H3>,
                  headerClassName: "table-header",
                  columns: [
                    {
                      Header: <H5>INVOICE ID</H5>,
                      headerClassName: "table-subheader",
                      Cell: cell => (
                        <a style={Invoice} href={`${cell.original.stripeUrl}`}>
                          <Paragraph>
                            <b>{cell.original.invoiceId}</b>
                          </Paragraph>
                        </a>
                      )
                    },
                    {
                      Header: <H5>SUBJECT</H5>,
                      headerClassName: "table-subheader",
                      Cell: cell => (
                        <div>
                          <Paragraph>{cell.original.subject}</Paragraph>
                        </div>
                      )
                    },
                    {
                      Header: <H5>ISSUED</H5>,
                      headerClassName: "table-subheader",
                      Cell: cell => (
                        <div>
                          <Paragraph>{cell.original.issueDate}</Paragraph>
                        </div>
                      )
                    },
                    {
                      Header: <H5>DUE DATE</H5>,
                      headerClassName: "table-subheader",
                      Cell: cell => (
                        <div>
                          <Paragraph>{cell.original.dueDate}</Paragraph>
                        </div>
                      )
                    },
                    {
                      Header: <H5>STATUS</H5>,
                      headerClassName: "table-subheader",
                      id: "status",
                      Cell: cell => (
                        <Paragraph>
                          <span>
                            <span
                              style={{
                                color:
                                  cell.original.status === "paid"
                                    ? "#ff9900"
                                    : cell.original.status === "open"
                                    ? "#00db62"
                                    : cell.original.status === "uncollectible"
                                    ? "#e03404"
                                    : cell.original.status === "void"
                                    ? "#717171"
                                    : cell.original.status === "draft"
                                    ? "#fbdf17"
                                    : "#000"
                              }}
                            >
                              &#x25C9;
                            </span>
                            {cell.original.status === "open"
                              ? " Open"
                              : cell.original.status === "paid"
                              ? " Paid"
                              : cell.original.status === "uncollectible"
                              ? " Uncollectible"
                              : cell.original.status === "void"
                              ? " Void"
                              : cell.original.status === "draft"
                              ? " Draft"
                              : " Not Set"}
                          </span>
                        </Paragraph>
                      )
                    }
                  ]
                }
              ]}
              minRows={5}
              style={{ height: "431px" }}
              showPagination={false}
            />
          </div>
        );
      }}
    </GetClientInvoices>
  );
};

export default ClientInvoiceTracker;
