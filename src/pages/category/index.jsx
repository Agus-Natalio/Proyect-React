import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Navbar from '../../components/navbar';
import CategoryContainer from '../../components/categoryContainer';

function Category() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <hr className="divider"></hr>
      <body>
        <CategoryContainer key={key} />
      </body>
    </div>
  );
}

export default Category;