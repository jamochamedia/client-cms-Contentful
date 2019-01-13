import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/Contentful/client";

import AsyncWriterProfile from "../../components/AsyncWriterProfile";

const WriterProfile = props => {
  //Fetch the profile from the client ID
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  async function fetchProfile() {
    //Pulls client information
    const res = await client.getEntry(props.match.params.writerid);
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

    //Return profile check results
    if (contentFulProfileCheck()) {
      return true;
    } else {
      return false;
    }
  }

  const { fields = {} } = profile;

  return (
    <div>
      <AsyncWriterProfile
        fullName={fields.fullName}
        position={fields.position}
        linkedInUrl={fields.linkedInUrl}
        role={fields.position}
        description={fields.description}
      />
    </div>
  );
};

export default withRouter(WriterProfile);
