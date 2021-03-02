import React from "react";
import "./AddToCart.scss";

function PurchaseItem(props) {
  return (
    <div>
      <button className="add-to-cart-button" onClick={props.addToCart}>
        Agregar {props.quantity} al Carrito
      </button>
    </div>
  );
}

export default PurchaseItem;
