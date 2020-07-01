import React from "react";

export default function SearchedTeam(props) {
  return (
    <div className="StandingsCard card col mb-3 ml-2">
      <div className="row no-gutters">
        <div className="col-md-3 logo-wrapper">
          <img src="..." className="card-img" alt="Team logo" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title headline">{props.data.name}</h5>
            <p className="card-text">{props.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
