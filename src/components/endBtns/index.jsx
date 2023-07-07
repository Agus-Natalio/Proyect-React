import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../cartContext';
import './endBtns.css';

function EndBtns({ itemCountValor, itemID }) {
  const { isInCart } = useContext(CartContext);
  const itemInCart = isInCart(itemID);

  return (
    <div>
      {itemInCart ? (
        <p className="endText">Ya agregaste este item al carrito</p>
      ) : (
        <p className="endText">
          {itemCountValor == 1 ? (
            'Se agregó 1 unidad al carrito'
          ) : (
            `Se agregaron ${itemCountValor} unidades al carrito`
          )}
        </p>
      )}
      <br />
      <Stack gap={2} className="mx-auto">
        <Link to={ROUTES.CART}>
          <Button className="detailBtn purchase col-md-7" variant="secondary">
            Terminar Compra
          </Button>
        </Link>
        <Link to={ROUTES.HOME}>
          <Button className="detailBtn col-md-7" variant="outline-secondary">
            Seguir Comprando
          </Button>
        </Link>
      </Stack>
    </div>
  );
}

export default EndBtns;