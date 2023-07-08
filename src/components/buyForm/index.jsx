import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../cartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import createOrder from '../../firebase/order';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './buyForm.css';

function CheckoutForm() {
  const { clearCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const { name, email, phone, address } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      buyer: {
        name,
        email,
        phone,
      },
      items: cartItems,
      date: new Date(),
      total: cartItems.reduce((suma, item) => suma + item.subtotal, 0),
    };

    createOrder(orderData)
      .then((orderId) => {
        console.log('Order created with ID:', orderId);
        clearCart();
        navigate('/');
        toast.success(`👌 Compra exitosa! Orden de compra: ${orderId}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-label">Nombre y apellido</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form-label">Dirección de correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
        />
        <Form.Text className="text-muted">
          <span>KaiHammer</span> no compartirá tu email con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form-label">Teléfono</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Ingresa tu número de celular"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form-label">Dirección</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="¿Dónde quieres que enviemos tus compras?"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          className="form-check"
          type="checkbox"
          label="Acepto los términos y condiciones"
          required
        />
      </Form.Group>
      <Button className="form-btn" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default CheckoutForm;