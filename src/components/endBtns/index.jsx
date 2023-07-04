import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './endBtns.css';

function EndBtns({itemCountValor}) {
  return (
    <div>
        {itemCountValor == 1 ? (
            <p className="endText">Se agrego 1 unidad al carromato</p>
          ) : (
            <p className="endText">Se agregaron {itemCountValor} unidades al carromato</p>
          )
        }
        <Stack gap={2} className="mx-auto">
        <Link to={ROUTES.CART}>
            <Button className="detailBtn purchase col-md-7" variant="secondary">Terminar Compra</Button>    
        </Link>
        <Link to={ROUTES.HOME}>
            <Button className="detailBtn col-md-7" variant="outline-secondary">Seguir Comprando</Button>
        </Link>
        </Stack>
    </div>
  );
}

export default EndBtns;