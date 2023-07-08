import React, { useContext } from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cartContext';

const CartWidget = () => {

  const { getTotalItemCount } = useContext(CartContext);

    return (
      <>
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#f1f1f1",}} className="cartIcon" />
            </a>
            {getTotalItemCount() > 0 && <span className='cart-badge'>{getTotalItemCount()}</span>}
        </div>
      </>
    );
};

export default CartWidget;