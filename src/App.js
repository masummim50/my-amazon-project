import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { createContext, useState } from 'react';

export const cartContext = createContext();

function App() {
  const [cartProduct, setCartProduct] = useState({
    cartQuantity: 0,
    cartPrice: 0,
    cartTax: 0,
    cartShipping: 0,
    cartTotal: 0
  })
  const [addedProducts, setAddedProducts] = useState([]);
  return (
    <cartContext.Provider value={[cartProduct, setCartProduct,addedProducts, setAddedProducts]}>
    <Home></Home>
    </cartContext.Provider>
  );
}

export default App;
