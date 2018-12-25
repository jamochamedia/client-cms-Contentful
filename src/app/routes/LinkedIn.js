import React from "react";
import LinkedInItem from "../routes/LinkedIn/LinkedInItem";
import { client } from "../../utils/client";

class LinkedIn extends React.Component {
  state = {
    posts: []
  };

  client = client;

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({
      content_type: "linkedInTextPost"
    });

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <p>LinkedIn Posts Page</p>
        <div>
          {posts.map((posts, i) => (
            <LinkedInItem key={i} {...posts} />
          ))}
        </div>
      </div>
    );
  }
}

export default LinkedIn;
