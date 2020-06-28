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
                  <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">This is a wider card</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col mb-3 ml-2">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://docs.google.com/drawings/d/e/2PACX-1vTBLsPvzqYVgImUJ1PtkyxO8xQ1oE_On8dUFueiye_a3rhszbTgjkkWseh1eEyMYsCVTdWviHfgXhOC/pub?w=644&amp;h=729"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">This is a wider card</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col mb-3 ml-2">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">This is a wider card</p>
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
