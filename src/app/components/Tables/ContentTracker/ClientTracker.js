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
class ClientTracker extends Component {
  state = {
    posts: []
  };

  client = client;

  componentDidMount() {
    this.fetch().then(this.setPosts);
  }

  fetch = () =>
    this.client.getEntries({
      content_type: "linkedInTextPost"
    });

  setPosts = response => {
    this.setState({
      posts: response.items.map(item => item)
    });
  };

  render() {
    const { posts } = this.state;

    const filterPosts = posts.filter(
      post =>
        post.fields.clientName.fields !== undefined &&
        post.fields.clientName.fields.clientName === this.props.clientName
    );

    return (
      <div>
        <ReactTable
          data={filterPosts}
          columns={[
            {
              Header: <H3>Content Tracker</H3>,
              headerClassName: "table-header",
              columns: [
                {
                  Header: <H5>POST TITLE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.postTitle",
                  Cell: cell => (
                    <a style={Post} href={`/linkedin/${cell.original.sys.id}`}>
                      <Paragraph>
                        <b>{cell.value}</b>
                      </Paragraph>
                    </a>
                  )
                },
                {
                  Header: <H5>STATUS</H5>,
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
                },
                {
                  Header: <H5>POST DATE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.postDate",
                  Cell: cell => (
                    <div>
                      <Paragraph>
                        {new Date(cell.value).toLocaleString()}
                      </Paragraph>
                    </div>
                  )
                },
                {
                  Header: <H5>WRITER</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.writer",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                },
                {
                  Header: <H5>Editor</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.editor",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
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

export default ClientTracker;
