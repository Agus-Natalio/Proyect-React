import React from 'react';
import './hero.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image1 from '../../assets/images/swDices.jpg';
import image2 from '../../assets/images/swLogo.jpg'
import image3 from '../../assets/images/swManual.png'

const Hero = ({ title }) => {
  return (
    <div className="mainHero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">¡La batalla por el destino galáctico está por comenzar y KaiHammer te brinda las herramientas para enfrentarla!<br></br>Descubre nuestros nuevos bundles provenientes de una galaxia muy, muy lejana y prepárate para aplastar a tus jugadores o resistir ante el poderío militar del Imperio Galáctico orquestado por tu GameMaster en cada emocionante tirada.<br></br> ¡Únete a la lucha y forja tu propio camino en esta épica saga de aventuras intergalácticas!</p>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image className="heroImg" src={image1} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image className="heroImg midImg" src={image2} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image className="heroImg" src={image3} roundedCircle />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;