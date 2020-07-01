import React from "react";
import News from "./News";
import Info from "./Info";
import Featured from "./Featured";
import mainImage from "./MainImage.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's Football Rocks!!</h1>
      </header>
      <div className="main row mx-0">
        <img
          src={mainImage}
          alt="Women soccer players celebrating"
          className="col-8 my-0 mx-0 py-0 px-0 mainImage"
        />{" "}
        <Featured />
      </div>
      <Info />
      <News />
      <footer className="App-footer">
        <small>Coded by Rebecca Tamachiro</small>
      </footer>
    </div>
  );
}
