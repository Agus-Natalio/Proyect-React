import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import getItems from '../../firebase/items';
import getCategories from '../../firebase/categories';
import './itemList.css';

const ItemList = () => {
  const { categoryName } = useParams();

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const categories = await getCategories();
        const category = categories.find((cat) => cat.nombre === categoryName);

        const items = await getItems();
        const filteredItems = category ? items.filter((item) => item.categoryId === category.id) : items;

        setSelectedCategory(category ? category.nombre : '');
        setProductList(filteredItems);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <Container>
      {loading ? (
        <div className="loadSpinner">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <div>
          <Row>
            {productList.map((product) => (
              <Col md={3} key={product.id}>
                <Item product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default ItemList;