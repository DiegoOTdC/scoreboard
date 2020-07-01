import React from "react";

export default function Player(props) {
  return (
    <div>
      <p key={props.id}>
        {props.id} {props.name} {props.score}
      </p>
    </div>
  );
}
