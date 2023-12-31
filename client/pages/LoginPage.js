import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../style.css";
import axios from "axios";
import logo from "../img/logo.png";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //post request to database
    try {
      const result = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          username: name,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      //only dispatch to redux if successful login
      if (result) {
        dispatch(
          login({
            name: name,
            password: password,
            id: result.data,
            loggedIn: true,
          })
        );
      }
    } catch (error) {
      dispatch(
        login({
          loggedIn: false,
        })
      );
      console.log("Login failed", error);
    }
  };

  // const registerHandle = (e) => {
  //   console.log(name, password);
  // };

  return (
    <div className="login">
      {/* <h1 className='logo'>Hawt Dog</h1> */}
      <img className="logo" src={logo} />
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}
