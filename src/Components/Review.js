import React, { useContext } from 'react';
import { UserContext } from '../App';
import Cart from './Cart';

const Review = () => {
  return (
    <div className="d-flex">
      <div className="w-75">
        
      </div>
      <Cart>
        <button className="btn btn-success">Place order</button>
      </Cart>
    </div>
  );
};

export default Review;