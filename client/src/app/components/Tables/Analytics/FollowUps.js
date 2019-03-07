import React from "react";
import moment from "moment";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

import GetClientFollowUpLeads from "../../../../containers/GetClientFollowUpLeads";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//Create component
const FollowUps = props => {
  const analyticsId = props.analyticsId;

  return (
    <GetClientFollowUpLeads analyticsId={analyticsId}>
      {data => {
        const leads = data.getClientFollowUpLeads;
        return (
          <ReactTable
            data={leads}
            noDataText="Loading..."
            columns={[
              {
                Header: <H3>People to Follow Up With</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>Full Name</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.fullName}</b>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>Job Role</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.role}</b>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>Company Name</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.companyName}</b>
                      </Paragraph>
                    )
                  },
                  {
                    Header: <H5>DATE</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <div>
                        <Paragraph>
                          {moment(cell.original.date).calendar(null, {
                            sameDay: "[Today]",
                            lastDay: "[Yesterday]",
                            lastWeek: "[Last] dddd",
                            sameElse: "MMM Do YYYY"
                          })}
                        </Paragraph>
                      </div>
                    )
                  },
                  {
                    Header: <H5>Message Link</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a href={`${cell.original.messageLink}`}>
                        <Paragraph>{cell.original.messageLink}</Paragraph>
                      </a>
                    )
                  },
                  {
                    Header: <H5>Rating</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => <Paragraph>{cell.original.rating}</Paragraph>
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
    </GetClientFollowUpLeads>
  );
};

export default FollowUps;
