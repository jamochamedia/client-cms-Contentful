import React, { Component } from "react";
import * as contentful from "contentful";
import "../../../../App.css";
import { H3, H4, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//Contentful ID's
const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

//Create component
class ContentTracker extends Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  componentDidMount() {
    this.fetch().then(this.setPosts);
  }

  fetch = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items.map(item => item.fields)
    });
  };

  render() {
    const { posts } = this.state;
    console.log(posts);

    const filterPosts = posts.filter(
      post => post.clientName.fields !== undefined
    );

    return (
      <div>
        <ReactTable
          data={filterPosts}
          columns={[
            {
              Header: <H3>Client Content Tracker</H3>,
              headerClassName: "table-header",
              columns: [
                {
                  Header: <H5>CLIENT</H5>,
                  headerClassName: "table-subheader",
                  id: "clientName",
                  accessor: "clientName.fields.clientName",
                  Cell: cell => (
                    <a href={`/clients/${cell.original.clientName.sys.id}`}>
                      <H4>{cell.value}</H4>
                    </a>
                  )
                },
                {
                  Header: <H5>STATUS</H5>,
                  headerClassName: "table-subheader",
                  id: "status",
                  accessor: "status",
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
                  Header: <H5>POST TITLE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "postTitle",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                },
                {
                  Header: <H5>POST DATE</H5>,
                  headerClassName: "table-subheader",
                  accessor: "postDate",
                  Cell: cell => (
                    <div>
                      <Paragraph>
                        {new Date(cell.value).toLocaleString()}
                      </Paragraph>
                    </div>
                  )
                },
                // {
                //   Header: <H5>QUESTION URL</H5>,
                //   headerClassName: "table-subheader",
                //   accessor: "questionUrl",
                //   Cell: cell => (
                //     <Paragraph>
                //       <a href={cell.value}>{cell.value}</a>
                //     </Paragraph>
                //   )
                // },
                {
                  Header: <H5>WRITER</H5>,
                  headerClassName: "table-subheader",
                  accessor: "writer",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                }
                // {
                //   Header: <H5>EDITOR</H5>,
                //   headerClassName: "table-subheader",
                //   accessor: "editor",
                //   Cell: cell => <Paragraph>{cell.value}</Paragraph>
                // }
                // {
                //   Header: <H5>LINKEDIN URL</H5>,
                //   headerClassName: "table-subheader",
                //   accessor: "linkedInUrl",
                //   Cell: cell => (
                //     <Paragraph>
                //       <a href={cell.value}>{cell.value}</a>
                //     </Paragraph>
                //   )
                // }
              ]
            }
          ]}
          defaultPageSize={5}
        />
      </div>
    );
  }
}

export default ContentTracker;
