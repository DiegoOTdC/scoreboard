import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <h2>
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
            />
          );
        })}
      </h2>
      <AddPlayerForm />
    </div>
  );
}
