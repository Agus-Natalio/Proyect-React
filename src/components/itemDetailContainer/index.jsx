import React from "react";
import ItemDetail from "../itemDetail";

function ItemDetailContainer({ selectedItem }) {
  return (
    <div className="mainContainer">
      <ItemDetail item={selectedItem} />
    </div>
  );
}

export default ItemDetailContainer;