import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards({ cards }) {
  let cardItems = [];
  if (cards) {
    cardItems = cards.map((card) => {
      return (
        <CardItem
          src={card.src}
          text={card.text}
          label={card.label}
          path={card.path}
        ></CardItem>
      );
    });
  }

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{cardItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
