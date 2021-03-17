import React, { useContext } from 'react';
import { cartContext } from '../App';

const Product = (props) => {
  const singleProduct = props.singleProduct;
  const {name, key, category, price,img,seller,shipping,star,stock} = singleProduct;
  const [cartProduct, setCartProduct,addedProducts, setAddedProducts] = useContext(cartContext);
  const handleAddProduct = ()=> {
    
    


    const newCart = {...cartProduct};
    const {cartQuantity, cartPrice, cartTax, cartShipping, cartTotal} = newCart;
    newCart.cartQuantity = cartQuantity + 1;
    newCart.cartPrice += price;
    newCart.cartTax += price/15;
    newCart.cartShipping += cartShipping;
    const total = newCart.cartPrice + newCart.cartTax;
    newCart.cartTotal = total;
    setCartProduct(newCart);
    console.log(newCart)
  }
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <img src={img} alt=""/>
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