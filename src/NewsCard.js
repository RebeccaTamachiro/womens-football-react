import React, { useState } from "react";

export default function NewsCard(props) {
  const [cardMathcing, setCardMatching] = useState({});

  function handleData() {
    setCardMatching({
      ready: true,
      newsImage: props.data.urlToImage,
      newsTitle: props.data.title,
      newsDescription: props.data.description,
      newsLink: props.data.url,
    });
  }

  if (cardMathcing.ready) {
    return (
      <div className="NewsCard card my-2">
        <img src={cardMathcing.newsImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title headline">{cardMathcing.newsTitle}</h5>
          <p className="card-text summary">{cardMathcing.newsDescription}</p>
          <a
            href={cardMathcing.newsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    );
  } else {
    handleData();
    return "Loading";
  }
}
