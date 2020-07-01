import React, { useState } from "react";
import axios from "axios";

import NewsCard from "./NewsCard";

import "./News.css";

export default function News() {
  const apiKey = "cbaf633b9a374a5588ed66f4872f2b73";
  const [loaded, setLoaded] = useState(false);
  const [newsCardData, setNewsCardData] = useState(null);

  function handleResponse(response) {
    setNewsCardData(response.data);
    setLoaded(true);
  }

  function getNewsFeed() {
    let apiUrl = `https://newsapi.org/v2/everything?q=football%20AND%20women%20NOT%20NFL&language=en&apiKey=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="News">
        <div className="row mx-2 my-4">
          <div className="card-deck">
            <NewsCard data={newsCardData.articles[3]} />
            <NewsCard data={newsCardData.articles[2]} />
            <NewsCard data={newsCardData.articles[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    getNewsFeed();
    return "Loading";
  }
}
