import React from "react";
import { Redirect } from "react-router-dom";

import ClientItem from "../routes/Clients/ClientItem";

import { client } from "../../utils/client";
import { areAuthItemsSet } from "../../utils/Auth/Auth";

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

  //Fetch all client profile images
  fetchImages = () => this.client.getAssets();

  setImages = response => {
    this.setState({
      images: response.items
    });
  };

  render() {
    const { clients } = this.state;
    return (
      <div>
        {!areAuthItemsSet() ? (
          <Redirect to="/login" />
        ) : (
          <div>
            <p>Our Clients</p>
            {clients.map((clients, i) => (
              <ClientItem key={i} {...clients} />
            ))}
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default Clients;
