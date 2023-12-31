import React from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import SwipePage from "./pages/SwipePage.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import MatchPage from "./pages/MatchPage2.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";

const App = () => {
  const user = useSelector(selectUser);
  console.log("user", user);

  return (
    <div>
      <div className="nav-bar">
        <Navbar></Navbar>
      </div>

      <div>
        <Routes>
          <Route
            exact path="/"
            element={
              user === null ? (
                <LoginPage />
              ) : user.loggedIn === true ? (
                <SwipePage />
              ) : (
                <SignupPage />
              )
            }
          ></Route>
          console.log(user);
          <Route path="/signup" element={user != null ? <CreateProfile/> :<SignupPage/>}></Route>
          <Route
            path="/swipe"
            element={user ? <SwipePage></SwipePage> : <LoginPage />}
          ></Route>
          <Route
            path="/match"
            element={user != null ? <MatchPage /> : <LoginPage />}
          ></Route>
           <Route
            path="/createprofile"
            element={<CreateProfile/>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
{
  /*// <div>
      //   {user != null ? <SwipePage2 /> : <LoginPage />}
      // </div></> */
}
{
  /* // return (
  //   <div>
  //     <LoginPage />
  //   </div>
  // ); */
}

export default App;
