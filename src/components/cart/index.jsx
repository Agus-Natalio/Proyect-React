import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "./cart.css";

function Cart () {
    return (
      <div className='cartChart'>
          <Row>
            <Col>
                <h3>EL CARRITO ESTA VACIO</h3>
                <div className="btnContainer">
                    <Link to={ROUTES.HOME}><Button className="btnContainer__btn">VOLVER AL CATALOGO</Button></Link>
                </div>
            </Col>
          </Row>
      </div>
    )
}

export default Cart