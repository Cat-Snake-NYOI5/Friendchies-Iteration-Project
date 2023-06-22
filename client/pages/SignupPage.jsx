import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

export default function SignupPage() {
    const [userVal, setUserVal] = useState("");
    const [passVal, setPassVal] = useState("");
    const dispatch = useDispatch();

    async function signup() {
        const response = await axios.post('http://localhost:3000/api/user/signup', {
            username: userVal,
            password: passVal
        }, {
            withCredentials: true,
        })
        console.log(response);
        if (response) {
            dispatch(
                login({
                    name: userVal,
                    password: passVal,
                    id: response.data,
                    loggedIn: true,
                }));
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <label htmlFor="username">Username</label>
            <input id="username" value={userVal} onChange={(e) => setUserVal(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" value={passVal} onChange={(e) => setPassVal(e.target.value)} />
            <button id="signup-button" onClick={signup}>Sign Up</button>
        </div>
    )
}
