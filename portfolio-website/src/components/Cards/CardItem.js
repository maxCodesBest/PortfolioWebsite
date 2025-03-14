import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cardsItem">
        <Link className="cardsItemLink" to={props.path} target="_blank">
          <figure className="cardsItemPic-wrap" data-category={props.label}>
            <img
              className="cardsItemImg"
              alt="img"
              src={props.src}
              placeholder={
                <img src="logo512.webp" className="cardsItemImg" alt="img" />
              }
            />
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
