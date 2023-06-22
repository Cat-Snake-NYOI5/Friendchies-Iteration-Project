
import logo from "../img/logo.png";
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { redirect } from "react-router-dom";


export default function SignupPage() {
    const [userVal, setUserVal] = useState("");
    const [passVal, setPassVal] = useState("");
    const dispatch = useDispatch();

    async function signup(e) {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/user/signup', {
            username: userVal,
            password: passVal
        }, {
            withCredentials: true,
        })
        if (response.data) {
            dispatch(
                login({
                    name: userVal,
                    password: passVal,
                    id: response.data,
                    loggedIn: true,
                }));
            redirect("/createprofile");
        }
    };


  return (
    <div className="login">
      <img className="logo" src={logo} />
      <h1>Sign Up</h1>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={userVal}
          onChange={(e) => setUserVal(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={passVal}
          onChange={(e) => setPassVal(e.target.value)}
        />
        <button className="submit-btn" id="signup-button" onClick={(e)=>signup(e)}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
