import React, { useState } from "react";
import axios from "axios";
import "./Featured.css";

import StandingsCard from "./StandingsCard";
import SearchedTeam from "./SearchedTeam";

export default function Featured() {
  const [ready, setReady] = useState(false);
  const [fwwData, SetFwwData] = useState({});
  const [teamInput, setTeamInput] = useState(null);

  function handleResponse(response) {
    SetFwwData(response.data);
    console.log(response.data);
    setReady(true);
  }

  function searchTeam(event) {
    event.preventDefault();
    let apiVariable = `${teamInput}`.toUpperCase();
    let searchMapping = {
      USA: "5ef77a472406353b2e0dc9b1",
      "UNITED STATES": "5ef77a472406353b2e0dc9b1",
      FRANCE: "5efe29b2bb5fbb1d2562f1a6",
      ENGLAND: "5efe2ddabb5fbb1d2562f37f",
      GERMANY: "5efe32430bab551d2b6ad1bc",
      ITALY: "5efe3afe7f16b71d48aa1d13/1",
      NORWAY: "5f0099267f16b71d48ab16de",
      CANADA: "5f009d817f16b71d48ab1901/1",
      AUSTRALIA: "5f00a34fbb5fbb1d2563f748",
      BRAZIL: "5f0188a00bab551d2b6c37e9",
      BRASIL: "5f0188a00bab551d2b6c37e9",
    };

    let apiUrl = `https://api.jsonbin.io/b/${searchMapping[apiVariable]}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setTeamInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="Featured interactiveSearch col-md-4 py-2">
        <h2 className="competitionName">FIFA World Cup 2019</h2>
        <SearchedTeam data={fwwData} />
        <p>Want to know how your team did?</p>
        <form onSubmit={searchTeam}>
          <div className="input-group searchForm">
            <input
              type="search"
              className="form-control searchInput"
              onChange={handleInput}
            />
            <div className="input-group-append">
              <input
                type="submit"
                className="btn btn-danger searchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Featured interactiveSearch col-md-4 py-2">
        <h2 className="competitionName">FIFA World Cup 2019</h2>
        <div className="card-deck ml-0">
          <StandingsCard ranking={0} />
          <StandingsCard ranking={1} />
          <StandingsCard ranking={2} />
        </div>
        <p>Want to know how your team did?</p>
        <form onSubmit={searchTeam}>
          <div className="input-group searchForm">
            <input
              type="search"
              className="form-control searchInput"
              onChange={handleInput}
            />
            <div className="input-group-append">
              <input
                type="submit"
                className="btn btn-danger searchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
