import React from "react";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import GetAllClients from "../../../../containers/GetAllClients";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
const ClientHomeTracker = () => {
  return (
    <GetAllClients>
      {data => {
        const clients = data.getAllClients;
        return (
          <ReactTable
            data={clients}
            noDataText="Loading..."
            columns={[
              {
                Header: <H3>Client List</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>CLIENT</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => {
                      return (
                        <a style={Post} href={`/clients/${cell.original.id}`}>
                          <Paragraph>
                            <b>{`${cell.original.clientName}`}</b>
                          </Paragraph>
                        </a>
                      );
                    }
                  },
                  {
                    Header: <H5>COMPANY NAME</H5>,
                    headerClassName: "table-subheader",
                    id: "status",
                    Cell: cell => (
                      <a style={Post} href={`${cell.original.url}`}>
                        <Paragraph>{cell.original.companyName}</Paragraph>
                      </a>
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
    </GetAllClients>
  );
};

export default ClientHomeTracker;
