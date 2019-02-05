import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/Contentful/client";

import ClientTracker from "../../components/Tables/Content/ClientContentTracker";
import InvoiceTracker from "../../components/Tables/Invoices/InvoiceTracker";

import AsyncClientProfile from "../../components/AsyncClientProfile";
import { checkEditor } from "../../../utils/Auth/Auth";

const ClientProfile = props => {
  //Fetch the profile from the client ID
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  async function fetchProfile() {
    //Pulls client information
    const res = await client.getEntry(props.match.params.clientprofileid);
    setProfile(res);

    //Sets client's auth0Id in localStorage that was manually set in Contentful
    const auth0Id = await res.fields.auth0Id;
    localStorage.setItem("auth0Id", auth0Id);

    //Function to check if userId from Auth0 ("userId")
    //matches manually set auth0Id ("auth0Id") in Contentful
    function contentFulProfileCheck() {
      const auth0Id = localStorage.getItem("auth0Id");
      const userId = localStorage.getItem("userId");

      //Checks if matches
      if (auth0Id === userId) {
        return true;
      } else if (auth0Id === undefined) {
        return false;
      } else {
        return false;
      }
    }

    //If it does match let client in,
    //if it doesn't match check if they are an editor
    if (contentFulProfileCheck()) {
      return true;
    } else if (checkEditor()) {
      return true;
    } else {
      return false;
    }
  }

  const { fields = {} } = profile;

  //Render Invoice Tracker
  const [displayInvoiceTracker, setTracker] = useState(false);

  const displayTracker = async () => {
    const response = !displayInvoiceTracker;
    setTracker(response);
  };

  let tracker;
  if (displayInvoiceTracker) {
    tracker = <InvoiceTracker clientName={fields.clientName} />;
  } else {
    tracker = <ClientTracker clientName={fields.clientName} />;
  }

  return (
    <div>
      <AsyncClientProfile
        clientName={fields.clientName}
        companyName={fields.companyName}
        displayTracker={displayTracker}
        linkedInUrl={fields.linkedInUrl}
        role={fields.clientRole}
        company={fields.companyName}
        clientDescription={fields.clientDescription}
        tracker={tracker}
      />
    </div>
  );
};

export default withRouter(ClientProfile);
