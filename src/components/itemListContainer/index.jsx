import React from 'react';
import ItemList from '../itemList';
import products from '../../assets/data/products.json';
import './listContainer.css';

let ItemListContainer = ({ selectedCategory }) => {
  // Filtra los productos en función de la categoría seleccionada
  const filteredProducts = selectedCategory ? products.filter(
    (item) => item.type == selectedCategory
  ) : products;

  console.log(filteredProducts);

  return (
    <div className="mainContainer">
      <h1>Lista de Productos</h1>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;