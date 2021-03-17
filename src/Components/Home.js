import React from 'react';
import Cart from './Cart';
import Shop from './Shop';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
          <Shop></Shop>
          <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;