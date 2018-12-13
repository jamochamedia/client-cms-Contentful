import React, { Component } from "react";
import namor from "namor";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single"
  };
};



class ContentTracker extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Content Tracker",
              columns: [
                {
                  Header: "Client Name",
                  accessor: "clientName"
                },
                {
                  Header: "Stage",
                  id: "stage",
                  accessor: d => d.lastName
                },
                {
                  Header: "Post Name",
                  accessor: "postName"
                },
                {
                  Header: "Post Date",
                  accessor: "postDate"
                },
                {
                  Header: "Question URL",
                  accessor: "questionUrl"
                },
                {
                  Header: "Post URL",
                  accessor: "postUrl"
                },
                {
                  Header: "Writer",
                  accessor: "writer"
                },
                {
                  Header: "Editor",
                  accessor: "editor"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default ContentTracker;
