import React from "react";
import { withRouter } from "react-router-dom";

import GetClient from "../../../containers/GetClient";

import ClientTracker from "../../components/Tables/Content/ClientContentTracker";

import AsyncClientProfile from "../../components/AsyncClientProfile";

const ClientProfile = props => {
  const clientId = parseInt(props.match.params.clientprofileid, 10);

  return (
    <GetClient clientId={clientId}>
      {data => {
        const client = data.getClient;

        return (
          <AsyncClientProfile
            clientName={client.firstName}
            companyName={client.firstName}
            displayTracker={client.firstName}
            linkedInUrl={client.firstName}
            role={client.firstName}
            company={client.firstName}
            clientDescription={client.firstName}
            buttonText={client.firstName}
            tracker={<ClientTracker clientName={client.firstName} />}
          />
        );
      }}
    </GetClient>
  );
};

export default withRouter(ClientProfile);
