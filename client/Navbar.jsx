import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Navbar = (props) => {
  const user = useSelector(selectUser);
  return (

    <nav className="nav">
    {(!user || user.loggedIn==false) &&<Link to='/signup'>Sign Up</Link>}
      {user && user.loggedIn==true && <Link to='/swipe'>Swipe</Link>}
      {user && user.loggedIn==true && <Link to='/match'>Match</Link>}
      {(!user || user.loggedIn!=true) && <Link to='/'>Login</Link>}

    </nav>
  );
};

export default Navbar;
