import React from "react";
import ClientItem from "../routes/Clients/ClientItem";
import { client } from "../../utils/client";

class Clients extends React.Component {
  state = {
    clients: [],
    images: []
  };

  client = client;

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
    this.fetchImages().then(this.setImages);
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

  fetchImages = () => this.client.getAssets();

  setImages = response => {
    this.setState({
      images: response.items
    });
  };

  render() {
    const { clients } = this.state;
    const { images } = this.state;
    console.log(images);
    return (
      <div>
        <p>Our Clients</p>
        {clients.map((clients, i) => (
          <ClientItem key={i} {...clients} />
        ))}
        <br />
      </div>
    );
  }
}

export default Clients;
