import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartBadge = () => {
  
    return (
      <>
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#f1f1f1",}} className="cartIcon" />
            </a>
            <span className='cart-badge'>7</span>
        </div>
      </>
    );
};

export default CartBadge