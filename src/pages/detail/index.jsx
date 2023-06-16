import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/itemDetailContainer';
import Navbar from '../../components/navbar';
import products from '../../assets/data/products.json';

const Detail = () => {
  const { itemID } = useParams();
  const product = products.find((item) => item.id == itemID);
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <ItemDetailContainer selectedItem={product}/>
    </div>
  );
};

export default Detail;