import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig';
import { UserContext } from '../App'
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const history = useHistory();
  console.log('history',history);
  const location = useLocation();
  console.log('location', location);
  const {from} = location.state || {from : {pathname : '/'}};
  console.log('thisis from', from);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const twitterProvider = new firebase.auth.TwitterAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [signIn, setSignIn] = useState(true);
  const handleGoogleSignIn = ()=> {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const gotUser = {
        isLoggedIn: true,
        name: res.user.displayName,
        photo: res.user.photoURL,
        email: res.user.email
      };
      setLoggedInUser(gotUser);
      history.replace(from)
    })
  };
  const handleTwitterSignIn = ()=> {
    firebase.auth().signInWithPopup(twitterProvider)
    .then(res => {
      const gotUser = {
        isLoggedIn: true,
        name: res.user.displayName,
        photo: res.user.photoURL,
        email: res.user.email
      };
      setLoggedInUser(gotUser);
      history.replace(from)
    })
  }

  return (
    <div className="bg-dark p-5 mx-auto mt-5 mb-5 text-white w-sm-75  w-50 text-center rounded">
      {loggedInUser.email ? <div>Hello {loggedInUser.name} you are logged in</div> : 
      <div>
        
      {signIn ? 
      <div><p>Or, already have an accounrt? <button onClick={()=> setSignIn(!signIn)} className="btn btn-info">Sign In</button></p></div> :
      <div><p>To Create a new account <button onClick={()=> setSignIn(!signIn)} className="btn btn-success">Sign Up</button></p></div> }
      <form action="">
        <div>
          {signIn && <input type="text" name="" className="form-control mb-3" placeholder="Your name" id=""/> }
          <input placeholder="Your email" type="email" className="form-control mb-3"/>
          <input type="password" name="" placeholder="enter your password" className="form-control mb-3" id=""/>
          
          {signIn ? <input type="submit" value="Sign Up" className="btn btn-success form-control"/>: <input type="submit" value="Log In" className="bg-primary form-control mb-3"/> }
        </div>
      </form>
      <p className='mt-3'>Or</p>
      <button className="btn btn-primary mb-3 form-control">Log in with facebook</button>
      <button onClick={handleGoogleSignIn} className="btn btn-danger mb-3 form-control">Log in with Gmail</button>
      <button className="btn btn-warning mb-3 form-control">Log in with Github</button>
      </div>
      }
    </div>
  );
};

export default Login;