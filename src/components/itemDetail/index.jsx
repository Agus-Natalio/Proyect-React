import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemCount from '../itemCount';
import EndBtns from '../endBtns';
import { CartContext } from '../cartContext';
import './itemDetail.css';

const ItemDetail = ({ item }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const [selectedItemCount, setSelectedItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    const product = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: count
    }; 
    console.log(product);
    addToCart(product)
    setSelectedItemCount(count);
    setShowItemCount(false);
    // Aquí puedes agregar la lógica para guardar el valor `count` en tu carrito o realizar cualquier otra acción necesaria
  };

  const image = require(`../../assets/images/${item.image}`);

  return (
    <div className="infoContainer">
      <Row>
        <Col className="imgContainer">
          <img className="infoContainer__img" src={image} alt={item.image} />
        </Col>
        <Col>
          <h2>{item.title}</h2>
          <h3 style={{ fontFamily: 'titleFont' }}>KaiHammer</h3>
          <br />
          <p>{item.desc}</p>
          {item.stock < 10 ? (
            <p className="modalStock">¡Solo quedan {item.stock} unidades!</p>
          ) : (
            <p className="modalStock">Quedan {item.stock} unidades</p>
          )}
          <h5>${item.price}</h5>
          <br />
          {showItemCount && <ItemCount stock={item.stock} onAddToCart={handleAddToCart} />}
          {!showItemCount && <EndBtns itemCountValor={selectedItemCount} itemID={item.id} />}
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;