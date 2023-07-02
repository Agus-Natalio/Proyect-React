import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/';
import Category from './pages/category';
import LandingPage from './pages/landing';
import Detail from './pages/detail';
import CartPage from './pages/cart';
import { ROUTES } from './constants/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
        <Route path={ROUTES.ITEM} element={<Detail />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;