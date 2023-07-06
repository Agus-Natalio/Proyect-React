import React from 'react';
import CartList from '../../components/cartList';
import Navbar from '../../components/navbar';

function CartPage() {
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <main>
      <CartList />
      </main>
    </div>
  );
}

export default CartPage;