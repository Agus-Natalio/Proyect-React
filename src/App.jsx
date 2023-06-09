import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/';
import LandingPage from './pages/landing';
import Detail from './pages/detail';
import CartPage from './pages/cart';
import Checkout from './pages/checkout';
import { ROUTES } from './constants/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./components/cartContext";
import { initializeApp } from "firebase/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

//Inicializacion firebase
const firebaseConfig = {
  apiKey: "AIzaSyDf2sQElZAImu8l0ySZ09WHLca8hUo4ZFA",
  authDomain: "coderhouse-reactjs-11779.firebaseapp.com",
  projectId: "coderhouse-reactjs-11779",
  storageBucket: "coderhouse-reactjs-11779.appspot.com",
  messagingSenderId: "86166154139",
  appId: "1:86166154139:web:0ea75ac3702932b7ab0f3e"
};

initializeApp(firebaseConfig);

//Inicio de la app
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CATEGORY} element={<Home />} />
          <Route path={ROUTES.ITEM} element={<Detail />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.CHECKOUT} element={<Checkout />}/> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;