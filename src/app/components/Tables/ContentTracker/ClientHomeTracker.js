import React, { Component } from "react";
import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils/client";

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
      <div>
        <ReactTable
          data={clients}
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
                    <a style={Post} href={`/clients/${cell.original.sys.id}`}>
                      <Paragraph>
                        <b>{cell.value}</b>
                      </Paragraph>
                    </a>
                  )
                },
                {
                  Header: <H5>CURRENT STATUS</H5>,
                  headerClassName: "table-subheader",
                  id: "status",
                  accessor: "fields.status",
                  Cell: row => (
                    <Paragraph>
                      <span>
                        <span
                          style={{
                            color:
                              row.value === "Question Sent"
                                ? "#9106e8"
                                : row.value === "In Writing"
                                ? "#00db62"
                                : row.value === "In Editing"
                                ? "#fce302"
                                : row.value === "In Client Review"
                                ? "#e03404"
                                : row.value === "Ready for Post"
                                ? "#01a6ff"
                                : row.value === "Posted"
                                ? "#ff9900"
                                : row.value === "Not Posting"
                                ? "#000000"
                                : "#5a5f66"
                          }}
                        >
                          &#x25C9;
                          {/* TODO: Add Most Recent Invoice paid and post made */}
                        </span>
                        {row.value === "Question Sent"
                          ? " Question Sent"
                          : row.value === "In Writing"
                          ? " In Writing"
                          : row.value === "In Editing"
                          ? " In Editing"
                          : row.value === "In Client Review"
                          ? " In Client Review"
                          : row.value === "Ready for Post"
                          ? " Ready for Post"
                          : row.value === "Posted"
                          ? " Posted"
                          : row.value === "Not Posting"
                          ? " Not Posting"
                          : " Not Set"}
                      </span>
                    </Paragraph>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={5}
          style={{ height: "300px" }}
          showPagination={false}
        />
      </div>
    );
  }
}

export default ClientHomeTracker;
