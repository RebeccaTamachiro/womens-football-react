import React from "react";
import News from "./News";
import Featured from "./Featured";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's Football Rocks!!</h1>
      </header>
      <Featured />
      <News />
      <footer className="App-footer">
        <small>Coded by Rebecca Tamachiro</small>
      </footer>
    </div>
  );
}
