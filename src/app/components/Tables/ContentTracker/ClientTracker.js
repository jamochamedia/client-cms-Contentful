import React, { Component } from "react";
import "../../../../App.css";
import { H3, H4, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";
import { client } from "../../../../utils/client";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//Create component
class ClientTracker extends Component {
  state = {
    posts: []
  };

  client = client;

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

    //TODO FILTER FOR NAME
    const filteredPosts = posts.filter(
      post =>
        post.clientName.fields !== undefined &&
        post.clientName.fields.clientName === "Shane Metcalf"
    );

    return (
      <div>
        <ReactTable
          data={filteredPosts}
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
                  Cell: cell => (
                    <a href={`/linkedin/${cell.original.path}`}>
                      <Paragraph>{cell.value}</Paragraph>
                    </a>
                  )
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
                {
                  Header: <H5>WRITER</H5>,
                  headerClassName: "table-subheader",
                  accessor: "writer",
                  Cell: cell => <Paragraph>{cell.value}</Paragraph>
                }
              ]
            }
          ]}
          defaultPageSize={5}
        />
      </div>
    );
  }
}

export default ClientTracker;

// componentWillReceiveProps(nextProps) {
//   const { client_name } = nextProps;
//   const newClientName = FilteredPosts(client_name);
//   this.setState({
//     clientName: newClientName,
//   })
// }

// componentDidMount() {
//   const (client_name) = this.props
//     const newClientName = clientName
// }

// const FilteredPosts = clientName => {
//   const post = filterUndef.filter(post => {
//     if (post.clientName.fields.clientName === clientName) {
//       return true;
//     }
//     return false;
//   });

//   if (post) {
//     return post.clientName;
//   }
//   return post;
// };
