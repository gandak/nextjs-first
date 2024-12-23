import React from "react";
import cardStyles from "./card.module.css";

export const Card = (props) => {
  return (
    <div className={cardStyles.cardContainer}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  );
};
