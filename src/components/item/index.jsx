import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../itemCount';
import './Item.css';

const Item = ({ product }) => {
  // Importa la imagen dinámicamente utilizando require
  const image = require(`../../assets/images/${product.image}`);

  return (
    <div className="item">
      <Card style={{ width: '18rem' }} className="itemCard">
        <Card.Body>
          <Card.Text className="itemType">{product.type}</Card.Text>
          <Card.Img className="itemImg" variant="top" src={image} alt={product.title} />
          <Card.Title className="itemTitle">{product.title}</Card.Title>
          <ItemCount stock={product.stock}/>
          <Button className="itemBtn" variant="primary">
            Ver detalle
          </Button>
          <Button className="itemBtn purchaseBtn" variant="primary">
            Purchase
          </Button>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="itemFooter">
            Stock: {product.stock}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Item;