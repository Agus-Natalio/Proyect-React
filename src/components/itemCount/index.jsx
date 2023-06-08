import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="itemCounter">
        <button className="itemCounter__addItemBtn" onClick={decrementCount} disabled={count == 0}><p>-</p></button>
        <span className="m-5">{count}</span>
        <button className="itemCounter__addItemBtn" onClick={incrementCount} disabled={count == stock}><p>+</p></button>
      </div>
    </div>
  );
}

export default ItemCount;