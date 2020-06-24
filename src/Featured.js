import React from "react";
import "./Featured.css";

import mainImage from "./MainImage.jpg";

export default function Featured() {
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
            <div class="card col mb-3 ml-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">This is a wider card</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card col mb-3 ml-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">This is a wider card</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card col mb-3 ml-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">This is a wider card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Want to know how your team did?</p>
          <form>
            <input type="search" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
}
