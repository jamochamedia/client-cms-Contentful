import React from "react";
import * as contentful from "contentful";

//Contentful ID's
const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

class LinkedIn extends React.Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

 componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <p>LinkedIn Posts Page</p>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        ))}
      </div>
    );
  }
}

export default LinkedIn;
