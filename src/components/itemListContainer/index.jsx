import React from 'react';
import ItemList from '../itemList';
import './listContainer.css';

const ItemListContainer = ({ filteredProducts }) => {
  return (
    <div className="mainContainer">
      <h1>Lista de Productos</h1>
      {filteredProducts.length > 0 ? (
        <ItemList products={filteredProducts} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ItemListContainer;