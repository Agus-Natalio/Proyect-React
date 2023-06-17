import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

/*const CartBadge = () => {
    return (
        <div className='cart'>
            <a href="#">
                <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#ffffff",}} />
                <span className='cart-badge'>3</span>
            </a>
        </div>
    );
};*/

const CartBadge = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className='cart'>
            <a href="#" onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#f1f1f1",}} className="cartIcon" />
            </a>
            <span className='cart-badge'>3</span>
        </div>
  
        <Offcanvas show={show} onHide={handleClose} className="cartDisplay">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="cartDisplay__msg">
            El carrito se encuentra vacio
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

export default CartBadge