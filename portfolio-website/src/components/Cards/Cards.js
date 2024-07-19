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
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">{cardItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
