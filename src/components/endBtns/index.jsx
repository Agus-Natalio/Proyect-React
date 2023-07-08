import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../cartContext';
import './endBtns.css';

function EndBtns({ itemID }) {
  const { isInCart } = useContext(CartContext);
  const itemInCart = isInCart(itemID);

  return (
    <>
      {!itemInCart ? (
        <p className="endText">Se agrego el item al carrito</p>
        ) : (
          <p className="endText">El item ya se encuentra en al carrito</p>
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
    </>
  );
}

export default EndBtns;