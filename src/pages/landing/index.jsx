import React from 'react';
import Landing from '../../components/landing';
import Navbar from '../../components/navbar';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default LandingPage;