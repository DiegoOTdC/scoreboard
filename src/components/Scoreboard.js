import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scorboard() {
  return (
    <div>
      <Player name="Diego" />
      <Player name="George" />
      <Player name="Ricardo" />
      <Player name="Nina" />
      <AddPlayerForm />
    </div>
  );
}
