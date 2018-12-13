import React, { Component } from "react";
import * as contentful from "contentful";

// Import React Table
import ReactTable from "react-table";

const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

class Home extends Component {

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
      posts: response.items
    });
  };

  render() {
    return (
      <div>
        {this.state.posts.map(({ fields }, i) => (
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        ))}
      </div>
    );
  }
}

export default Home;
