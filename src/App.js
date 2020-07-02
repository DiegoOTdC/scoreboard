import React from "react";
import "./App.scss";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
