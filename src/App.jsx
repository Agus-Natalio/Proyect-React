import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/';
import Category from './pages/category';
import LandingPage from './pages/landing';
import { ROUTES } from './constants/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;