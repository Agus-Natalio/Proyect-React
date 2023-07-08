import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import ItemListContainer from '../../components/itemListContainer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <hr className="divider" />
      <body>
        <Hero title="¡Novedades en el escenario galactico!" image="../assets/images/heroBG.jpg" />
        <hr className="divider" />
        <div className="bgContainer">
          <ItemListContainer />
        </div>
      </body>
    </div>
  );
}

export default Home;
