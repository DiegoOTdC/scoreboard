import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 },
    { id: 3, name: "Player 3", score: 0 },
  ]);

  const players_sorted = [...players];

  const [sort_by, set_sort_by] = useState("score");
  if (sort_by === "score") {
    players_sorted.sort(compare_score);
  } else {
    players_sorted.sort(compare_name);
  }

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    set_players(
      players.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            score: player.score + 1,
          };
        } else {
          return player;
        }
      })
    );
  };

  const reset = () => {
    set_players(
      players.map((player) => {
        return { ...player, score: (player.score = 0) };
      })
    );
  };

  const randomize = () => {
    set_players(
      players.map((player) => {
        return {
          ...player,
          score: (player.score = Math.round(Math.random() * 100)),
        };
      })
    );
  };

  const addPlayer = (name) => {
    const newPlayer = { name: name, score: 0, id: players.length + 1 };
    const newPlayers = [...players, newPlayer];
    set_players(newPlayers);
  };

  const remPlayer = (name) => {
    const playersList = [...players];
    const player = playersList
      .map(function (player) {
        return player.name;
      })
      .indexOf(name);
    const playerToRemove = [playersList[player]];
    const oneLessPlayer = playersList.filter(
      (item) => !playerToRemove.includes(item)
    );
    set_players(oneLessPlayer);
  };

  return (
    <div className="Scoreboard">
      <h4>Players scores:</h4>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>{" "}
        <button onClick={reset}>reset</button>
        <button onClick={randomize}>randomize</button>
      </p>
      {players_sorted.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
            remPlayer={remPlayer}
          />
        );
      })}
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
