import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  const onClickRemPlayer = () => {
    props.remPlayer(props.name);
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
            <button className="buttonX" onClick={onClickRemPlayer}>
              X
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}
