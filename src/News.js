import React, { useState } from "react";
import "./News.css";
import axios from "axios";
import mainImage from "./MainImage.jpg";

export default function News() {
  const apiKey = "cbaf633b9a374a5588ed66f4872f2b73";
  const [newsCardData, setNewsCardData] = useState({ ready: false });

  function handleResponse(response) {
    setNewsCardData({
      ready: true,
      newsImage: response.data.articles[3].urlToImage,
      newsTitle: response.data.articles[3].title,
      newsDescription: response.data.articles[3].description,
      newsLink: response.data.articles[3].url,
    });
  }

  function getNewsFeed() {
    let apiUrl = `https://newsapi.org/v2/everything?q=football%20AND%20women%20NOT%20NFL&language=en&apiKey=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (newsCardData.ready) {
    return (
      <div className="News">
        <div className="row mx-2">
          <div className="card-deck">
            <div className="card my-2">
              <img
                src={newsCardData.newsImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title headline">
                  {newsCardData.newsTitle}
                </h5>
                <p className="card-text summary">
                  {newsCardData.newsDescription}
                </p>
                <a
                  href={newsCardData.newsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="card my-2">
              <img src={mainImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title headline">Card title</h5>
                <p className="card-text summary">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div className="card my-2">
              <img src={mainImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title headline">Card title</h5>
                <p className="card-text summary">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getNewsFeed();
    return "Loading";
  }
}
