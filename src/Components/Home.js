
import Cart from './Cart';
import Shop from './Shop';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';
const Home = () => {
  
  return (
    <div className="container-fluid">
      <div className="row d-flex">
          <Shop></Shop>
          <Cart>
          <Link to='/review' className="btn btn-info">Review Order</Link>
          </Cart>
      </div>
    </div>
  );
};

export default Home;