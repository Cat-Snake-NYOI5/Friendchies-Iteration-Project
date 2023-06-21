import React from 'react';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SwipePage2 from './pages/SwipePage2.jsx';

export default function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <SwipePage2 /> : <LoginPage />}</div>;
  // return (
  //   <div>
  //     <LoginPage />
  //   </div>
  // );
}
