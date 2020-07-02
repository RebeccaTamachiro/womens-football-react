import React, { useState } from "react";

export default function SearchedTeam(props) {
  const [searchData, setSearchData] = useState({ ready: false });

  function dataMapping() {
    setSearchData({
      ready: true,
      name: props.data.nationTeam,
      description: props.data.summary,
      logo: props.data.logo,
    });
  }

  if (searchData.ready && props.data.nationTeam === searchData.name) {
    return (
      <div className="StandingsCard card col mb-3 ml-2">
        <div className="row no-gutters">
          <div className="col-md-3 logo-wrapper">
            <img src={searchData.logo} className="card-img" alt="Team logo" />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title headline">{searchData.name}</h5>
              <p className="card-text">{searchData.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    dataMapping();
    return "Loading";
  }
}
