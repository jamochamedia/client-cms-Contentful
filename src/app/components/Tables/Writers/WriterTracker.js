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

const M20 = {
  marginTop: "20px"
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
      //TODO: BREAKS WITH NO WRITER
      post =>
        (post.fields.writer.fields !== undefined &&
          post.fields.writer.fields.fullName === this.props.fullName) ||
        (post.fields.editor.fields !== undefined &&
          post.fields.editor.fields.fullName === this.props.fullName)
    );

    console.log(filterPosts);

    return (
      <div style={M20}>
        <ReactTable
          data={filterPosts}
          noDataText="Loading..."
          columns={[
            {
              Header: <H3>Content Tracker</H3>,
              headerClassName: "table-header",
              columns: [
                {
                  Header: <H5>CLIENT NAME</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.clientName.fields.clientName",
                  Cell: cell => (
                    <a
                      style={Post}
                      href={`/clients/${
                        cell.original.fields.clientName.sys.id
                      }`}
                    >
                      <Paragraph>
                        <b>{cell.value}</b>
                      </Paragraph>
                    </a>
                  )
                },
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
                  Header: <H5>Writer</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.writer.fields.fullName",
                  Cell: cell => (
                    <a
                      style={Post}
                      href={`/writers/${cell.original.fields.writer.sys.id}`}
                    >
                      <Paragraph>{cell.value}</Paragraph>
                    </a>
                  )
                },
                {
                  Header: <H5>Editor</H5>,
                  headerClassName: "table-subheader",
                  accessor: "fields.editor.fields.fullName",
                  Cell: cell => (
                    <a
                      style={Post}
                      href={`/writers/${cell.original.fields.editor.sys.id}`}
                    >
                      <Paragraph>{cell.value}</Paragraph>
                    </a>
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
  }
}

export default ClientTracker;
