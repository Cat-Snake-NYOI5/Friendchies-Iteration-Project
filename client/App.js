import React from 'react';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SwipePage from './pages/SwipePage';

export default function App() {
  // const user = useSelector(selectUser);

  // return <div>{user ? <SwipePage /> : <LoginPage />}</div>;
  return (
    <div>
      <LoginPage />
    </div>
  );
}
