import React from "react";
import "./Items.scss";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <div className="item-card-container">
      <div className="item-card-image">
        <img src={props.items.imgSrc} alt="" />
      </div>
      <div className="item-card-info">
        <h3 className="item-card-product-name">{props.items.name}</h3>
        <span className="item-card-price"> $ {props.items.price} </span>
        <Link
          to={{
            pathname: `item-detail/${props.items.id}`,
            state: { item: props.items },
          }}
        >
          <button className="vdetails">
            <ion-icon name="search-outline"></ion-icon>Inspeccionar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Items;
