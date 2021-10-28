import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedin, setIsloggedin] = useState(localStorage.getItem("loggedin"));
    const login = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            localStorage.setItem("loggedin", 1);
            setIsloggedin(1);
        } else {
            alert("Invalid username and password");
        }

    }
    return (
        <div>
            <h1>Welcome To Login Page </h1>
            <form onSubmit={login}>
                <input type="text" className="form-control-lg m-4 border" placeholder="enter the username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <input type="password" className="form-control-lg m-4 border" placeholder='enter the password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button className="btn btn-primary" type="submit">Login</button>
            
                {isLoggedin !== null && <Redirect to="/dashboard"/>}
            </form>


        </div>
    );
}