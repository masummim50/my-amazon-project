import React, { useContext } from 'react';
import { cartContext } from '../App';

const Cart = () => {
  const [cartProduct, setCartProduct] = useContext(cartContext);
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
              <td className='border-0'>0</td>
            </tr>
            <tr>
              <td className='border-0'>Total Cost:</td>
              <td className='border-0'>{cartTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn btn-info">Review Order</button>
    </div>
  );
};

export default Cart;