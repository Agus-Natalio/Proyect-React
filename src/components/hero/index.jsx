import React from 'react';
import './hero.css';

const Hero = ({ title, subtitle, image }) => {
  return (
    <div className="mainHero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
      <img className="hero-image" src={image} alt="Hero" />
    </div>
  );
};

export default Hero;