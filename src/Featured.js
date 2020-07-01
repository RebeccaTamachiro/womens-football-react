import React, { useState } from "react";
import axios from "axios";
import "./Featured.css";

import StandingsCard from "./StandingsCard";
import SearchedTeam from "./SearchedTeam";

export default function Featured() {
  const [ready, setReady] = useState(false);
  const [fwwData, SetFwwData] = useState({});

  function handleResponse(response) {
    SetFwwData({
      name: response.data.nationTeam,
      description: response.data.summary,
    });
    console.log(response.data);
    setReady(true);
  }

  function searchTeam(event) {
    event.preventDefault();
    let apiUrl = "https://api.jsonbin.io/b/5ef77a472406353b2e0dc9b1";
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Featured interactiveSearch col-4">
        <SearchedTeam data={fwwData} />
        <p>Want to know how your team did?</p>
        <form onClick={searchTeam}>
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  } else {
    return (
      <div className="Featured interactiveSearch col-4">
        <h2>FIFA World Cup 2019</h2>
        <div className="card-deck ml-0">
          <StandingsCard ranking={0} />
          <StandingsCard ranking={1} />
          <StandingsCard ranking={2} />
        </div>
        <p>Want to know how your team did?</p>
        <form onClick={searchTeam}>
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
