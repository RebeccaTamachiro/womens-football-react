import React, { useState } from "react";
import axios from "axios";
import "./Featured.css";

import mainImage from "./MainImage.jpg";

export default function Featured() {
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
  }

  function searchTeam() {
    let apiUrl = "https://api.jsonbin.io/b/5ef77a472406353b2e0dc9b1";
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Featured">
        <div className="main row mx-0">
          <div className="col-8 my-0 mx-0 py-0 px-0">
            <img
              src={mainImage}
              alt="Women soccer players celebrating"
              className="mainImage"
            />{" "}
          </div>
          <div className="interactiveSearch col-4">
            <h2>FIFA World Cup 2019</h2>
            <div className="card-deck ml-0">
              <div className="card col mb-3 ml-2">
                <div className="row no-gutters">
                  <div className="col-md-3 logo-wrapper">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/United_States_Soccer_Federation_logo_2016.svg/1200px-United_States_Soccer_Federation_logo_2016.svg.png"
                      className="card-img"
                      alt="Team logo"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title headline">Champions</h5>
                      <p className="card-text">Description</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col mb-3 ml-2">
                <div className="row no-gutters">
                  <div className="col-md-3 logo-wrapper">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Netherlands_national_football_team_logo.svg/180px-Netherlands_national_football_team_logo.svg.png"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title headline">Runners-up</h5>
                      <p className="card-text">Description</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col mb-3 ml-2">
                <div className="row no-gutters">
                  <div className="col-md-3 logo-wrapper">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Swedish_Football_Association_crest.svg/1200px-Swedish_Football_Association_crest.svg.png"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title headline">3rd Place</h5>
                      <p className="card-text">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Want to know how your team did?</p>
            <form onClick={searchTeam}>
              <input type="search" />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    searchTeam();
    return "Loading";
  }
}
