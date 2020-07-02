import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  function add() {
    props.addPlayer(name);
    set_name("");
  }

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{" "}
        <button onClick={add}>Add</button>
      </p>
    </div>
  );
}
