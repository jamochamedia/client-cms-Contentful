import React, { Component } from "react";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils/Contentful/client";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
class TeamTracker extends Component {
  state = {
    writers: []
  };

  client = client;

  componentDidMount() {
    this.fetch().then(this.setWriters);
  }

  fetch = () =>
    this.client.getEntries({
      content_type: "writer"
    });

  setWriters = response => {
    this.setState({
      writers: response.items.map(item => item)
    });
  };

  render() {
    const { writers } = this.state;
    return (
      <ReactTable
        data={writers}
        noDataText="Loading..."
        columns={[
          {
            Header: <H3>Your Team</H3>,
            headerClassName: "table-header",
            columns: [
              {
                Header: <H5>NAME</H5>,
                headerClassName: "table-subheader",
                accessor: "fields.fullName",
                Cell: cell => (
                  <a style={Post} href={`/writers/${cell.original.sys.id}`}>
                    <Paragraph>
                      <b>{cell.value}</b>
                    </Paragraph>
                  </a>
                )
              },
              {
                Header: <H5>POSITION</H5>,
                headerClassName: "table-subheader",
                accessor: "fields.position",
                Cell: cell => (
                  <Paragraph>
                    <b>{cell.value}</b>
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
  }
}

export default TeamTracker;
