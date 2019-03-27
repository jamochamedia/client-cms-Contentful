import React from "react";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import GetClientLinkedInPostAnalytics from "../../../../containers/GetClientLinkedInPostAnalytics";

//Create component
const LinkedInPosts = props => {
  const auth0Id = props.auth0Id;

  return (
    <GetClientLinkedInPostAnalytics auth0Id={auth0Id}>
      {post => {
        const fields = post.getClientLinkedInPostAnalytics;
        console.log(auth0Id);
        console.log(fields);
        return (
          <ReactTable
            data={fields}
            noDataText="Oh no! Looks like you have no content to show."
            columns={[
              {
                Header: <H3>LinkedIn Content Analytics</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>POST TITLE</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <a href={`${cell.original.postLink}`}>
                          <b>{cell.original.postTitle}</b>
                        </a>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>LIKES</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.likes}</b>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>COMMENTS</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.comments}</b>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>SHARES</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <div>
                        <Paragraph>
                          <b>{cell.original.shares}</b>
                        </Paragraph>
                      </div>
                    )
                  },
                  {
                    Header: <H5>VIEWS (Updated on Friday)</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.postViews1Week}</b>
                      </Paragraph>
                    )
                  }
                ]
              }
            ]}
            minRows={5}
            style={{ height: "400px" }}
            showPagination={false}
          />
        );
      }}
    </GetClientLinkedInPostAnalytics>
  );
};

export default LinkedInPosts;
