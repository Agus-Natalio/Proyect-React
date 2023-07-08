import React from 'react';
import ItemList from '../itemList';
import './listContainer.css';

const ItemListContainer = () => {
  return (
    <div className="mainContainer">
      <h1>Lista de Productos</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;