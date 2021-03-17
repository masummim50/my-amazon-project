import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData'
import Product from './Product';

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(()=> {
    const allProducts = fakeData;
    setAllProducts(allProducts)
  },[])
  return (
    <div className="container w-75">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          allProducts.map(singleProduct => <Product singleProduct = {singleProduct}></Product>)
        }
      </div>
    </div>
  );
};

export default Shop;