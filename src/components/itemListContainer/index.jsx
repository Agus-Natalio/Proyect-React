import React from 'react';
import ItemList from '../itemList';
import './listContainer.css';

const ItemListContainer = (filteredItems) => {
  return (
    <div className="mainContainer">
      <h1>Lista de Productos</h1>
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemListContainer;