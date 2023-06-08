import React from 'react';
import ItemList from '../itemList';
import products from '../../assets/data/products.json';

const ItemListContainer = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;