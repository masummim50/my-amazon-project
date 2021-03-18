import React, { useContext } from 'react';
import { UserContext } from '../App';

const Cart = (props) => {
  const [loggedInUser, setLoggedInUser, cartProduct, setCartProduct] = useContext(UserContext);
  const {cartQuantity, cartPrice, cartTax, cartShipping, cartTotal} = cartProduct;
  return (
    <div className="border-2 mt-5 w-25 h-auto">
      <div className="cart-info">
        <h6>Total items selected: {cartQuantity}</h6>
        <table className="table">
          <tbody>
            <tr>
              <td className='border-0'>Cost:</td>
              <td className='border-0'>{cartPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td className='border-0'>Tax:</td>
              <td className='border-0'>{cartTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td className='border-0'>Shipping:</td>
              <td className='border-0'>{cartShipping.toFixed(2)}</td>
            </tr>
            <tr style={{borderTop:'1px solid black'}}>
              <td className='border-0'>Total Cost:</td>
              <td className='border-0'>{cartTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {props.children}
    </div>
  );
};

export default Cart;