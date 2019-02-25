import React from "react";

import "../../../../App.css";
import { H3, H5 } from "../../Typography/HeaderText";
import { Paragraph } from "../../Typography/ParapgraphText";

import GetAllWriters from "../../../../containers/GetAllWriters";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Post = {
  color: "#292f36"
};

//Create component
const WriterTracker = props => {
  return (
    <GetAllWriters>
      {data => {
        const writers = data.getAllWriters;
        return (
          <ReactTable
            data={writers}
            noDataText="Loading..."
            columns={[
              {
                Header: <H3>Writer List</H3>,
                headerClassName: "table-header",
                columns: [
                  {
                    Header: <H5>NAME</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <a style={Post} href={`/writers/${cell.original.id}`}>
                        <Paragraph>
                          <b>{cell.original.fullName}</b>
                        </Paragraph>
                      </a>
                    )
                  },
                  {
                    Header: <H5>POSITION</H5>,
                    headerClassName: "table-subheader",
                    Cell: cell => (
                      <Paragraph>
                        <b>{cell.original.position}</b>
                      </Paragraph>
                    )
                  }
                ]
              }
            ]}
            minRows={5}
            style={{ height: "350px" }}
            showPagination={false}
          />
        );
      }}
    </GetAllWriters>
  );
};

export default WriterTracker;
