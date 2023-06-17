import React, { useState, useEffect } from 'react';
import Item from '../item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import './itemList.css';

const ItemList = ({products}) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Simulación de una promesa con un tiempo de espera de 2.5 segundos
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2500);
      });
    };

    fetchData()
      .then((data) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <Container>
      {loading ? (
        <div className="loadSpinner">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <>
          <Row>
            {productList.map((product) => (
              <Col md={3} key={product.id}>
                <Item product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ItemList;