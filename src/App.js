
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Login from './Components/Login';
import { createContext, useState } from 'react';
import Review from './Components/Review';
import Cart from './Components/Cart';
import ProtectedRoute from './Components/ProtectedRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProduct, setCartProduct] = useState({
    cartQuantity: 0,
    cartPrice: 0,
    cartTax: 0,
    cartShipping: 0,
    cartTotal: 0
  });
  const [addedProducts, setAddedProducts]= useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, cartProduct, setCartProduct, addedProducts, setAddedProducts]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/shop'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <ProtectedRoute path='/review'>
            <Review></Review>
          </ProtectedRoute>
          <Cart></Cart>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
