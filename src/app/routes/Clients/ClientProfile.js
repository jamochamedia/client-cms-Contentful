import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { client } from "../../../utils/Contentful/client";

import ClientTracker from "../../components/Tables/Content/ClientContentTracker";
import InvoiceTracker from "../../components/Tables/Invoices/InvoiceTracker";

import AsyncProfile from "../../components/AsyncClientProfile";

const ClientProfile = props => {
  //Fetch the profile from the client ID
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  async function fetchProfile() {
    const res = await client.getEntry(props.match.params.clientprofileid);
    setProfile(res);
    const auth0Id = res.fields.auth0Id;
    localStorage.setItem("auth0Id", auth0Id);
  }

  const { fields = {} } = profile;

  //Render Invoice Tracker
  const [displayInvoiceTracker, setTracker] = useState(false);

  const displayTracker = async () => {
    const response = !displayInvoiceTracker;
    setTracker(response);
  };

  const contentFulProfileCheck = async () => {
    const auth0Id = await localStorage.getItem("auth0Id");
    const userId = await localStorage.getItem("userId");
    console.log(auth0Id);
    console.log(userId);
    if (auth0Id === userId) {
      return true;
    } else if (auth0Id === undefined) {
      return true;
    } else {
      return true;
    }
  };

  let tracker;
  if (displayInvoiceTracker) {
    tracker = <InvoiceTracker clientName={fields.clientName} />;
  } else {
    tracker = <ClientTracker clientName={fields.clientName} />;
  }

  return (
    <div>
      {contentFulProfileCheck() ? (
        <AsyncProfile
          clientName={fields.clientName}
          companyName={fields.companyName}
          displayTracker={displayTracker}
          linkedInUrl={fields.linkedInUrl}
          role={fields.clientRole}
          company={fields.companyName}
          clientDescription={fields.clientDescription}
          tracker={tracker}
        />
      ) : (
        <Redirect to="/admin" />
      )}
    </div>
  );
};

export default withRouter(ClientProfile);
