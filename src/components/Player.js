import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <div>
      <ul key={props.id}>
        <li>
          {props.name} (score: {props.score}){" "}
          <button onClick={onClickIncrement}>increment</button>
        </li>
      </ul>
    </div>
  );
}
