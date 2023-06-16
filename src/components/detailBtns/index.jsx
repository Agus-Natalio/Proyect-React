import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './detailBtns.css';

function DetailBtns() {
  return (
    <Stack gap={2} className="mx-auto">
      <Button className="detailBtn purchase col-md-7" variant="secondary">Añadir al carrito</Button>
      <Link to={ROUTES.HOME}>
        <Button className="detailBtn col-md-7" variant="outline-secondary">Volver</Button>
      </Link>
    </Stack>
  );
}

export default DetailBtns;