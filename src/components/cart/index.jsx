import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";

function Cart ({ item }) {

    const image = require(`../../assets/images/${item.image}`);

    return (
      <div classNamer="cartItem">
        <div className="cartItemInfo">
          <img src={image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: {item.subtotal}</p>
          <div className="cartItemInfo__trashCan">
            <a href="#"><FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#f1f1f1",}} className="cartItemInfo__trashCan" /></a>
          </div>
        </div>
      </div>
    )
}

export default Cart