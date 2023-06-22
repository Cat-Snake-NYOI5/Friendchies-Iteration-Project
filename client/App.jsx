import React from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SwipePage from './pages/SwipePage.jsx';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx';
import MatchPage from './pages/MatchPage2.jsx';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Navbar></Navbar>
      <div>
      <Routes>
        <Route
          path="/"
          element={user != null ?  <SwipePage /> : <LoginPage />}
        ></Route>
        <Route
          path="/signup"
          element={<SignupPage></SignupPage>}
        ></Route>
        <Route
          path="/swipe"
          element={ user? <SwipePage></SwipePage>: <LoginPage /> }
          ></Route>
           <Route
          path="/match"
          element={ user != null? <MatchPage/>: <LoginPage /> }
        ></Route>
        </Routes>
      </div>
    </div>)
}
      {/*// <div>
      //   {user != null ? <SwipePage2 /> : <LoginPage />}
      // </div></> */}
  {/* // return (
  //   <div>
  //     <LoginPage />
  //   </div>
  // ); */}

export default App;
