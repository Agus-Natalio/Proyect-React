import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shularani from '../../assets/images/niimatraBg.jpg';
import './landing.css';

function Landing() {
  return (
    <div className="landingContainer">
        <Row>
            <Col xs={6} md={4}>
                <img className="landingContainer__img" src={shularani} alt="indexBg" />
            </Col>
            <Col xs={12} md={8} className='landingContainer__info'>
                <div className="landingContainer__header">
                    <h1 style={{fontFamily: 'titleFont'}}>Bienvenido a <span>K</span><span className='underline'>aiHammer</span></h1>
                </div>
                <br/>
                <div className="landingContainer__body">
                    <p>Date un gusto con estilo y añade un toque mágico a tus juegos. Desde <span>dados únicos y deslumbrantes</span> hasta <span>libros de reglas y accesorios</span>, aquí encontrarás todo lo que necesitas para dar vida a tus aventuras. Nuestro catálogo cuenta con una amplia variedad de dados de diferentes materiales y diseños, así como <span>sets temáticos</span> de edición limitada.</p>
                    <p>En <span>KaiHammer</span>, nos enorgullece ofrecerte productos de <span>alta calidad</span> que satisfacen las necesidades de cualquier jugador. Nuestro equipo está compuesto por <span>apasionados jugadores de rol</span> que entienden tus expectativas y se esfuerzan por superarlas.</p>
                </div>
                <br/>
                <div className="landingContainer__footer">
                    <p>¡<span>KaiHammer</span> les desea a todos una excelente existencia!</p>
                    <div>
                        <Link to="/products">
                            <button className='landingContainer__btn'>
                                Ver productos
                            </button>
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default Landing;