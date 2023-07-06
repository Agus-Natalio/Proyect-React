import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cart from "../cart";
import { CartContext } from "../cartContext";

function CartList () {

    const { cartItems } = useContext(CartContext);

    if (cartItems.length == 0) {
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
        );
    };

    return(
        <Container className = "cartChart">
            <h3>DETALLE DEL CARRITO</h3>
            <Row>
                {cartItems.map((product) => (
                <div key = {product.id}>
                    <Cart item={product} />
                </div>
                ))}
            </Row>
            <div className="btnContainer">
              <Link to={ROUTES.HOME}><Button className="btnContainer__btn">VOLVER AL CATALOGO</Button></Link>
            </div>
        </Container>
    )
}

export default CartList;