import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Hero from '../../components/hero';
import ItemListContainer from '../../components/itemListContainer';
import products from '../../assets/data/products.json';

function CategoryContainer() {
  const { categoryType } = useParams();
  const [dataByCategory, setDataByCategory] = useState([]);

  useEffect(() => {
    const getProducts = () => {

      const filteredProducts = products.filter(
        (product) => product.type === categoryType
      );

      setDataByCategory(filteredProducts);
    };

    getProducts();
  }, [categoryType]);

  return (
    <div className="App">
      <body>
        <Hero title="¡Novedades en el escenario galáctico!" image="../assets/images/heroBG.jpg" />
        <hr className="divider"></hr>
        <div className="bgContainer">
          <ItemListContainer filteredProducts={dataByCategory} />
        </div>
      </body>
    </div>
  );
}

export default CategoryContainer;