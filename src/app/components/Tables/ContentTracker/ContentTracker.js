import React, { Component } from "react";
import * as contentful from "contentful";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//Import Components
// import ClientProfile from "../../../routes/Clients/ClientProfile";

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
              Header: "Client",
              id: "clientName",
              accessor: "clientName.fields.clientName",
              //TODO Link Client Page
              Cell: cell => (
                <a href={`/clients/${cell.original.clientName.fields.path}`}>
                  {cell.value}
                </a>
              )
            },
            {
              Header: "Status",
              id: "status",
              accessor: "status",
              Cell: row => (
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
              )
            },
            {
              Header: "Post Title",
              accessor: "postTitle"
            },
            {
              Header: "Post Date",
              accessor: "postDate",
              Cell: cell => <div>{new Date(cell.value).toLocaleString()}</div>
            },
            {
              Header: "Question URL",
              accessor: "questionUrl",
              Cell: cell => <a href={cell.value}>{cell.value}</a>
            },
            {
              Header: "Writer",
              accessor: "writer"
            },
            {
              Header: "Editor",
              accessor: "editor"
            },
            {
              Header: "LinkedIn URL",
              accessor: "linkedInUrl",
              Cell: cell => <a href={cell.value}>{cell.value}</a>
            }
          ]}
          defaultPageSize={5}
        />
      </div>
    );
  }
}

export default ContentTracker;
