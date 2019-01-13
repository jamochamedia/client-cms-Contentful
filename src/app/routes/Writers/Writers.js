import React from "react";
import WriterItem from "./WriterItem";
import { client } from "../../../utils/Contentful/client";

class Writers extends React.Component {
  state = {
    writers: []
  };

  client = client;

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({
      content_type: "writer"
    });

  setPosts = response => {
    this.setState({
      writers: response.items
    });
  };

  render() {
    const { writers } = this.state;
    return (
      <div>
        <p>Our Writers</p>
        {writers.map((writers, i) => (
          <WriterItem key={i} {...writers} />
        ))}
      </div>
    );
  }
}

export default Writers;
