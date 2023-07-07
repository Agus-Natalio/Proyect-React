import React, { useContext } from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cartContext';

const CartWidget = () => {

  const { cartItems } = useContext(CartContext)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
      <>
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#f1f1f1",}} className="cartIcon" />
            </a>
            {cartItemCount > 0 && <span className='cart-badge'>{cartItemCount}</span>}
        </div>
      </>
    );
};

export default CartWidget;