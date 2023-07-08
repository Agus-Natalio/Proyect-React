import React, { useState, useEffect } from 'react';
import Item from '../item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import getItems from '../../firebase/items';
import './itemList.css';

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getItems(); // Call the getItems function to retrieve items from Firebase
        setProductList(items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <div className="loadSpinner">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <Row>
          {productList.map((product) => (
            <Col md={3} key={product.id}>
              <Item product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ItemList;