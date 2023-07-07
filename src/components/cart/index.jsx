import React, { useContext } from "react";
import { CartContext } from "../cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";

function Cart ({ item }) {

    const image = require(`../../assets/images/${item.image}`);
    const fixedSubtotal = item.subtotal.toFixed(1);
    const { removeFromCart } = useContext(CartContext);

    const handleDeleteItem = () => {
      removeFromCart(item.id)
    }

    return (
      <div classNamer="cartItem">
        <div className="cartItemInfo">
          <img src={image} alt={item.title} />
          <h4>{item.title.split(' ')[0]}<br/>{item.title.split(' ').slice(1).join(' ')}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${fixedSubtotal}</p>
          <div className="cartItemInfo__trashCan" onClick={handleDeleteItem}>
            <a className="theTrashCan"><FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#f1f1f1",}} className="cartItemInfo__trashCan" /></a>
          </div>
        </div>
      </div>
    )
}

export default Cart