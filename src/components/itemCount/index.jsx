import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="itemCounter">
        <button className="itemCounter__addItemBtn" onClick={decrementCount} disabled={count == 1}>-</button>
        <span className="m-5">{count}</span>
        <button className="itemCounter__addItemBtn" onClick={incrementCount} disabled={count == stock}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;