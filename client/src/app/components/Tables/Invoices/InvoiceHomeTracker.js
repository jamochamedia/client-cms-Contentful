import React from "react";
import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import GetAllInvoices from "../../../../containers/GetAllInvoices";

const Invoice = {
  color: "#292f36"
};

//Create component
const InvoiceHomeTracker = () => {
  return (
    <GetAllInvoices>
      {data => {
        const invoices = data.getAllInvoices;
        return (
          <ReactTable
            data={invoices}
            noDataText="Loading..."
            columns={[
              {
                Header: <H3>Invoice Overview</H3>,
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
                    Header: <H5>CLIENT</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a
                        style={Invoice}
                        href={`/clients/${cell.original.clientId}`}
                      >
                        <Paragraph>
                          <b>{cell.original.clientName}</b>
                        </Paragraph>
                      </a>
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
            style={{ height: "350px" }}
            showPagination={false}
          />
        );
      }}
    </GetAllInvoices>
  );
};

export default InvoiceHomeTracker;
