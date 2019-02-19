import React, { Component } from "react";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils/Contentful/client";
import GetAllClients from "../../../../containers/GetAllClients";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
class ClientHomeTracker extends Component {
  state = {
    clients: []
  };

  client = client;

  componentDidMount() {
    this.fetch().then(this.setPosts);
  }

  fetch = () =>
    this.client.getEntries({
      content_type: "clientIdentifier"
    });

  setPosts = response => {
    this.setState({
      clients: response.items.map(item => item)
    });
  };

  render() {
    const { clients } = this.state;

    return (
      <GetAllClients>
        {data => {
          console.log(data);
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
                      accessor: "fields.clientName",
                      Cell: cell => (
                        <a
                          style={Post}
                          href={`/clients/${cell.original.sys.id}`}
                        >
                          <Paragraph>
                            <b>{cell.value}</b>
                          </Paragraph>
                        </a>
                      )
                    },
                    {
                      Header: <H5>COMPANY NAME</H5>,
                      headerClassName: "table-subheader",
                      id: "status",
                      accessor: "fields.companyName",
                      Cell: cell => (
                        <a
                          style={Post}
                          href={`${cell.original.fields.linkedInUrl}`}
                        >
                          <Paragraph>{cell.value}</Paragraph>
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
  }
}

export default ClientHomeTracker;
