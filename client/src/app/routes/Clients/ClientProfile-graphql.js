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
            clientName={client.clientName}
            companyName={client.clientName}
            displayTracker={client.clientName}
            linkedInUrl={client.clientName}
            role={client.clientName}
            company={client.clientName}
            clientDescription={client.clientName}
            buttonText={client.clientName}
            tracker={<ClientTracker clientName={client.clientName} />}
          />
        );
      }}
    </GetClient>
  );
};

export default withRouter(ClientProfile);
