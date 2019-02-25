import React from "react";
import moment from "moment";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

import GetClientLinkedInPosts from "../../../../containers/GetClientLinkedInPosts";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
const ClientContentTracker = props => {
  const clientId = props.clientId;
  return (
    <GetClientLinkedInPosts clientId={clientId}>
      {data => {
        const posts = data.getClientLinkedInPosts;
        return (
          <ReactTable
            data={posts}
            noDataText="Oh no! You don't have any content."
            columns={[
              {
                Header: <H3>Content Tracker</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>POST TITLE</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a style={Post} href={`/linkedin/${cell.original.id}`}>
                        <Paragraph>
                          <b>{cell.original.postTitle}</b>
                        </Paragraph>
                      </a>
                    )
                  },
                  {
                    Header: <H5>STATUS</H5>,
                    headerClassName: "table-subheader",
                    id: "status",
                    Cell: cell => (
                      <Paragraph>
                        <span>
                          <span
                            style={{
                              color:
                                cell.original.status === "Question Sent"
                                  ? "#9106e8"
                                  : cell.original.status === "In Writing"
                                  ? "#00db62"
                                  : cell.original.status === "Back to Writing"
                                  ? "#fce302"
                                  : cell.original.status === "In Editing"
                                  ? "#fce302"
                                  : cell.original.status === "In Client Review"
                                  ? "#e03404"
                                  : cell.original.status === "Ready for Post"
                                  ? "#01a6ff"
                                  : cell.original.status === "Posted"
                                  ? "#ff9900"
                                  : cell.original.status === "Not Posting"
                                  ? "#000000"
                                  : "#5a5f66"
                            }}
                          >
                            &#x25C9;
                          </span>
                          {cell.original.status === "Question Sent"
                            ? " Question Sent"
                            : cell.original.status === "In Writing"
                            ? " In Writing"
                            : //Shows as "In Editing" to client
                            cell.original.status === "Back to Writing"
                            ? " In Editing"
                            : cell.original.status === "In Editing"
                            ? " In Editing"
                            : cell.original.status === "In Client Review"
                            ? " In Client Review"
                            : cell.original.status === "Ready for Post"
                            ? " Ready for Post"
                            : cell.original.status === "Posted"
                            ? " Posted"
                            : cell.original.status === "Not Posting"
                            ? " Not Posting"
                            : " Not Set"}
                        </span>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>POST DATE</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <div>
                        <Paragraph>
                          {moment(cell.original.postDate).calendar(null, {
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
                    Header: <H5>WRITER</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a
                        style={Post}
                        href={`/writers/${cell.original.writerId}`}
                      >
                        <Paragraph>{cell.original.writer}</Paragraph>
                      </a>
                    )
                  },
                  {
                    Header: <H5>Editor</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a
                        style={Post}
                        href={`/writers/${cell.original.editorId}`}
                      >
                        <Paragraph>{cell.original.editor}</Paragraph>{" "}
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
        );
      }}
    </GetClientLinkedInPosts>
  );
};

export default ClientContentTracker;
