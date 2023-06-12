import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './detailBtns.css';

function DetailBtns({props}) {
  return (
    <Stack gap={2} className="mx-auto">
      <Button className="purchaseDetailBtn col-md-4" variant="secondary">Purchaseate eso</Button>
      <Button className="col-md-2" variant="outline-secondary" onClick={props.onHide}>Volver</Button>
    </Stack>
  );
}

export default DetailBtns;