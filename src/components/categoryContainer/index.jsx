import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Hero from '../../components/hero';
import ItemListContainer from '../../components/itemListContainer';

function CategoryContainer() {


  return (
    <div className="App">
      <body>
        <Hero title="¡Novedades en el escenario galáctico!" image="../assets/images/heroBG.jpg" />
        <hr className="divider"></hr>
        <div className="bgContainer">
          <ItemListContainer />
        </div>
      </body>
    </div>
  );
}

export default CategoryContainer;