import React from "react";

export default function Player(props) {
  return (
    <div>
      <p>
        {props.id} {props.name} {props.score}
      </p>
    </div>
  );
}
