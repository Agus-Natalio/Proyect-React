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
                <h3>EL CARROMATO ESTA RE PUTO VACIO LACRA MAL OLIENTE</h3>
                <div className="btnContainer">
                    <Link to={ROUTES.HOME}><Button className="btnContainer__btn">DEVOLVEME AL CATALOGO</Button></Link>
                    <Button className="btnContainer__btn">AYUDAME LOCO</Button>
                    <Link to="https://stock-images.0o.si/?p#/old-man-tries-to-climb-ladder-falls-down-and-eats-cookie-2298498123"><Button className="btnContainer__OctoFiles">Octo Files</Button></Link>
                </div>
            </Col>
          </Row>
      </div>
    )
}

export default Cart