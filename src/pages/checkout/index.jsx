import React from 'react';
import CheckoutContainer from '../../components/buyFormContainer';
import Navbar from '../../components/navbar';

function Checkout() {
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <main>
      <CheckoutContainer />
      </main>
    </div>
  );
}

export default Checkout;