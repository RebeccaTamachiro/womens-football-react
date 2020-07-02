import React, { useState } from "react";
import "./SearchedTeam.css";

export default function SearchedTeam(props) {
  const [searchData, setSearchData] = useState({ ready: false });

  function dataMapping() {
    setSearchData({
      ready: true,
      name: props.data.nationTeam,
      description: props.data.summary,
      logo: props.data.logo,
      videoLink: props.data.watch,
    });
  }

  if (searchData.ready && props.data.nationTeam === searchData.name) {
    return (
      <div className="SearchedTeam card col mb-2 my-2">
        <div className="nameWrapper row no-gutters">
          <img
            src={searchData.logo}
            className="card-img mx-2 mt-2"
            alt="Team logo"
          />
          <h5 className="card-title headline">{searchData.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{searchData.description}</p>
          <a
            href={searchData.videoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See with your own eyes
          </a>
        </div>
      </div>
    );
  } else {
    dataMapping();
    return "Loading";
  }
}
