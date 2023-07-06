import React, { useContext } from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cartContext';

const CartBadge = () => {

  const { cartItems } = useContext(CartContext)

  const cartItemCount = cartItems.length;
  
    return (
      <>
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#f1f1f1",}} className="cartIcon" />
            </a>
            <span className='cart-badge'>{cartItemCount}</span>
        </div>
      </>
    );
};

export default CartBadge