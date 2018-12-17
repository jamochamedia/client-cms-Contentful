import React from "react";
import * as contentful from "contentful";
import ClientItem from "../routes/Clients/ClientItem";

//Contentful ID's
const SPACE_ID = "le3jnclmcpxu";
const ACCESS_TOKEN =
  "995a6dca6f0f6cd6e2fdb805d631c96af1cda58513b55ba824668d8fdfa18966";

class ClientProfile extends React.Component {
  state = {
    clients: []
  };

  client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({
      content_type: "clientIdentifier"
    });

  setPosts = response => {
    console.log(response.items);
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

export default ClientProfile;
