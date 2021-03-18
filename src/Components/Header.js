import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/logo.png';
import './Header.css'
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOut = () => {
    const logoutuser = {
      isLoggedIn: false,
      name: '',
      photo: '',
      email: ''
    }
    setLoggedInUser(logoutuser)
  }
  return (
    <div>
      <div className="logo-container text-center p-5">
        <img className='w-25' src={logo} alt=""/>
      </div>
      <div className="header-container bg-secondary">
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/shit">Shit</Link>
        {loggedInUser.email ? 
        <Link onClick={handleLogOut} to='/' className='float-right'>Log Out</Link> : 
        <Link to='/login' className='float-right'>Log In</Link>}
      </div>
    </div>
  );
};

export default Header;