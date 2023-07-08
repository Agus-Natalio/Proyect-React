import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import ItemListContainer from '../../components/itemListContainer';

function Home() {

  const { categoryName } = useParams();
  console.log(categoryName);

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
