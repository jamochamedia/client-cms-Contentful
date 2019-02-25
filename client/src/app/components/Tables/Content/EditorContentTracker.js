import React from "react";
import "../../../../App.css";
import { H3, H4, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

import GetAllLinkedInPosts from "../../../../containers/GetAllLinkedInPosts";

import moment from "moment";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const color = {
  color: "#292f36"
};

//Create component
const EditorContentTracker = props => {
  return (
    <GetAllLinkedInPosts>
      {data => {
        const posts = data.getAllLinkedInPosts;
        return (
          <ReactTable
            data={posts}
            noDataText="Loading..."
            columns={[
              {
                Header: <H3>Client Content Tracker</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>CLIENT</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a href={`/clients/${cell.original.clientId}`}>
                        <H4>{cell.original.clientName}</H4>
                      </a>
                    )
                  },
                  {
                    Header: <H5>POST TITLE</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a style={color} href={`/linkedin/${cell.original.id}`}>
                        <Paragraph>{cell.original.postTitle}</Paragraph>
                      </a>
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
                        style={color}
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
                        style={color}
                        href={`/writers/${cell.original.editorId}`}
                      >
                        <Paragraph>{cell.original.editor}</Paragraph>
                      </a>
                    )
                  },
                  {
                    Header: <H5>STATUS</H5>,
                    headerClassName: "table-subheader",
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
                                  : //Shows as "In Editing" to client
                                  cell.original.status === "Back to Writing"
                                  ? "#42cef4"
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
                            : cell.original.status === "Back to Writing"
                            ? " Back to Writing"
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
                  }
                ]
              }
            ]}
            minRows={5}
            style={{ height: "500px" }}
            showPagination={false}
          />
        );
      }}
    </GetAllLinkedInPosts>
  );
};

export default EditorContentTracker;
