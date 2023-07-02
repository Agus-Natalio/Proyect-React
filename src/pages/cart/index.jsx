import React from 'react';
import Cart from '../../components/cart';
import Navbar from '../../components/navbar';

function CartPage() {
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <main>
        <Cart />
      </main>
    </div>
  );
}

export default CartPage;