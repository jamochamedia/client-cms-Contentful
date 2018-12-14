import React, { Component } from "react";
import * as contentful from "contentful";

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
    return (
      <div>
        <ReactTable
          data={posts}
          columns={[
            {
              Header: "Client",
              accessor: "clientName"
            },
            {
              Header: "Status",
              id: "status",
              accessor: "status"
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
              Cell: cell =><a href={cell.value}>{cell.value}</a> 
            },
            {
              Header: "Writer",
              accessor: "writer",
            },
            {
              Header: "Editor",
              accessor: "editor",
            },
            {
              Header: "LinkedIn URL",
              accessor: "linkedInUrl",
              Cell: cell =><a href={cell.value}>{cell.value}</a> 
            },
          ]}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

export default ContentTracker;
