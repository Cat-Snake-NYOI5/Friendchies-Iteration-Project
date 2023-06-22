import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Navbar = (props) => {
  const user = useSelector(selectUser);
  return (

    <nav className="nav">
    {!user && <Link to='/signup'>Sign Up</Link>}
      {user && <Link to='/swipe'></Link>}
      {user && <Link to='/match'></Link>}
      {!user && <Link to='/'>Login</Link>}

    </nav>
  );
};

export default Navbar;
