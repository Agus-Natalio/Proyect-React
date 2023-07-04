import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './ItemCount.css';

function ItemCount({ stock, onAddToCart }) {
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

  const handleAddToCart = () => {
    onAddToCart(count);
  };

  return (
    <div>
      <div className="itemCounter">
        <button className="itemCounter__addItemBtn" onClick={decrementCount} disabled={count == 1}>-</button>
        <span className="m-5">{count}</span>
        <button className="itemCounter__addItemBtn" onClick={incrementCount} disabled={count == stock}>+</button>
      </div>
      <br />
      <Stack gap={2} className="mx-auto">
        <Button className="detailBtn purchase col-md-7" variant="secondary" onClick={handleAddToCart}>
          Añadir al Carrito
        </Button>
        <Link to={ROUTES.HOME}>
          <Button className="detailBtn col-md-7" variant="outline-secondary">
            Volver al Catálogo
          </Button>
        </Link>
      </Stack>
    </div>
  );
}

export default ItemCount;