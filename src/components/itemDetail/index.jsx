import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailBtns from '../detailBtns';
import ItemCount from '../itemCount';
import './itemDetail.css';

const ItemDetail = ({item}) => {
  const image = require(`../../assets/images/${item.image}`);
  return (
    <div className='infoContainer'>
      <Row>
          <Col className="imgContainer"><img className="infoContainer__img" src={image} alt={item.image} /></Col>
          <Col>
            <h2>{item.title}</h2>
            <h3 style={{fontFamily: 'titleFont'}}>KaiHammer</h3>
            <br></br>
            <p>{item.desc}</p>         
            {item.stock < 10 ? (
              <p className="modalStock">¡Solo quedan {item.stock} unidades!</p>
            ) : (
              <p className="modalStock">Quedan {item.stock} unidades</p>
            )}
            <h5>${item.price}</h5>
            <br></br>  
            <ItemCount stock={item.stock}/>
            <br></br>
            <DetailBtns />
          </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;