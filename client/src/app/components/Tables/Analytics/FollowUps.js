import React, { Component } from "react";
import moment from "moment";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils//Contentful/client";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
class FollowUps extends Component {
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
          noDataText="Loading..."
          columns={[
            {
              Header: <H3>Follow Up Leads</H3>,
              headerClassName: "table-header",
              columns: [
                {
                  Header: <H5>Full Name</H5>,
                  headerClassName: "table-subheader",
                  accessor: "Full Name",
                  Cell: cell => (
                    <a style={Post} href={`/clients/${cell.original.sys.id}`}>
                      <Paragraph>
                        <b>{cell.value}</b>
                      </Paragraph>
                    </a>
                  )
                },
                {
                  Header: <H5>DATE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "Date",
                  Cell: cell => (
                    <div>
                      <Paragraph>
                        {moment(cell.value).calendar(null, {
                          sameDay: "[Today]",
                          lastDay: "[Yesterday]",
                          lastWeek: "[Last] dddd",
                          sameElse: "MMM Do YYYY, h:mm:ss a"
                        })}
                      </Paragraph>
                    </div>
                  )
                },
                {
                  Header: <H5>Message Link</H5>,
                  headerClassName: "table-subheader",
                  accessor: "Link",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                },
                {
                  Header: <H5>Rating</H5>,
                  headerClassName: "table-subheader",
                  accessor: "Rating",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                }
              ]
            }
          ]}
          minRows={5}
          style={{ height: "400px" }}
          showPagination={false}
        />
      </div>
    );
  }
}

export default FollowUps;
