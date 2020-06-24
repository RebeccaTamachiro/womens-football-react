import React from "react";
import "./News.css";
import mainImage from "./MainImage.jpg";

export default function News() {
  return (
    <div className="News">
      <div className="row mx-2">
        <div class="card-deck">
          <div class="card my-2">
            <img src={mainImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title headline">Card title</h5>
              <p class="card-text summary">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="card my-2">
            <img src={mainImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title headline">Card title</h5>
              <p class="card-text summary">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div class="card my-2">
            <img src={mainImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title headline">Card title</h5>
              <p class="card-text summary">
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
}
