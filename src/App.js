import React from "react";
import Scores from "./Scores";
import News from "./News";
import Featured from "./Featured";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's Football Rocks!!</h1>
      </header>
      <Featured />
      <Scores />
      <News />
      <footer className="App-footer">
        <small>Coded by Rebecca Tamachiro</small>
      </footer>
    </div>
  );
}

export default App;
