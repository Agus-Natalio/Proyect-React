import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartBadge = () => {
    return (
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#ffffff",}} />
                <span className='cart-badge'>3</span>
            </a>
        </div>
    );
};

export default CartBadge