import React, { useContext } from 'react';
import { UserContext } from '../App';

const Product = (props) => {
  const singleProduct = props.singleProduct;
  const {name, price,img} = singleProduct;
  const [loggedInUser, setLoggedInUser, cartProduct, setCartProduct, addedProducts, setAddedProducts] = useContext(UserContext);
  const handleAddProduct = ()=> {

    
    const newCart = {...cartProduct};
    const {cartQuantity, cartShipping} = newCart;
    newCart.cartQuantity = parseFloat(cartQuantity) + 1;
    newCart.cartPrice += price;
    newCart.cartTax += price/15;
    newCart.cartShipping += cartShipping;
    const total = newCart.cartPrice + newCart.cartTax;
    newCart.cartTotal = total;
    setCartProduct(newCart);
    console.log('newcart',newCart)
  };
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <img className='w-100' src={img} alt=""/>
          <div className="info">
            <h6>{name}</h6>
          </div>
        </div>
        <div className="card-footer border-0">
          Price: {price}
        </div>
        <div className="card-footer">
          <button onClick={handleAddProduct} className="btn btn-danger">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;