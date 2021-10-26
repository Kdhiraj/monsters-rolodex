import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster" height="180" width="180"/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
