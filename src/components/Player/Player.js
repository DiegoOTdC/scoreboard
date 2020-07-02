import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <div>
      <ul key={props.id}>
        <li className="Player">
          <div
            className="percentage_coloring"
            style={{ width: props.score + "%" }}
          />
          <p>
            {props.name} (score: {props.score}){" "}
            <button className="button" onClick={onClickIncrement}>
              increment
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}
