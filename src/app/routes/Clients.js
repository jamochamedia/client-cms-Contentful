import React from "react";
import ClientItem from "../routes/Clients/ClientItem";
import { client } from "../../utils/client";

class Clients extends React.Component {
  state = {
    clients: []
  };

  client = client;

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({
      content_type: "clientIdentifier"
    });

  setPosts = response => {
    this.setState({
      clients: response.items
    });
  };

  render() {
    return (
      <div>
        <p>Our Clients</p>
        {this.state.clients.map(({ fields }, i) => (
          <ClientItem key={i} {...fields} />
        ))}
        <br />
      </div>
    );
  }
}

export default Clients;
