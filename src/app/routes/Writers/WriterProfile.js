import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { client } from "../../../utils/Contentful/client";

import AsyncWriterProfile from "../../components/AsyncWriterProfile";

const WriterProfile = props => {
  //Fetch the profile from the client ID
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, {});

  async function fetchProfile() {
    const res = await client.getEntry(props.match.params.writerid);
    setProfile(res);
    const auth0Id = res.fields.auth0Id;
    localStorage.setItem("auth0Id", auth0Id);
  }

  const { fields = {} } = profile;

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

  return (
    <div>
      {contentFulProfileCheck() ? (
        <AsyncWriterProfile
          fullName={fields.fullName}
          position={fields.position}
          linkedInUrl={fields.linkedInUrl}
          role={fields.position}
          description={fields.description}
        />
      ) : (
        <Redirect to="/admin" />
      )}
    </div>
  );
};

export default withRouter(WriterProfile);
