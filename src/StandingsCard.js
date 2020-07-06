import React from "react";
import "./StandingsCard.css";

export default function StandingsCard(props) {
  const FWWStanding = [
    {
      title: "Champions",
      description:
        "Having won all the matches, The United States managed to defend their title and are now four-times World Champions.",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/United_States_Soccer_Federation_logo_2016.svg/1200px-United_States_Soccer_Federation_logo_2016.svg.png",
    },
    {
      title: "Runners-up",
      description:
        "The Netherlands were the European Champions of 2017 and did not disappoint at the World Cup. A well deserved second place.",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Netherlands_national_football_team_logo.svg/1200px-Netherlands_national_football_team_logo.svg.png",
    },
    {
      title: "3rd Place",
      description:
        "A well known name in Women's Football, Switzerland has proved its strength once again. Against England, they've won 3rd place.",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Swedish_Football_Association_crest.svg/1200px-Swedish_Football_Association_crest.svg.png",
    },
  ];

  return (
    <div className="StandingsCard card col mb-3 ml-2">
      <div className="row no-gutters">
        <div className="col-md-3 logo-wrapper">
          <img
            src={FWWStanding[props.ranking].logo}
            className="card-img"
            alt="Team logo"
          />
        </div>
        <div className="col-md-9">
          <div className="card-body px-0 py-2">
            <h5 className="card-title headline">
              {FWWStanding[props.ranking].title}
            </h5>
            <p className="card-text">
              {FWWStanding[props.ranking].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
