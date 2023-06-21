import React from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SwipePage2 from './pages/SwipePage2.jsx';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LoginPage></LoginPage>}
        ></Route>
        <Route
          path="/signup"
          element={<SignupPage></SignupPage>}
        ></Route>
        <Route
          path="/swipe"
          element={<SwipePage2></SwipePage2>}
        ></Route>

      </Routes>
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
