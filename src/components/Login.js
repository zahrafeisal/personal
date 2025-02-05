import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const desiredName = "Karl Munyoro Kamau";
    const desiredPassword = "06.02.2006";
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === desiredName && password === desiredPassword) {
            navigate('/home');
        } else {
            alert("Invalid details!")
        }
    }

    return (
        <div className="login-div">
            <h2>Just to confirm it's actually you</h2>
            <p className="login-p">(Wouldn't want anyone knowing I'm actually nice to you)</p>
            <form onSubmit={handleSubmit} className="login-form">
                <p>Name</p>
                <input
                  type="name"
                  placeholder="All names btw"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Try '06.02.2006'"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button btn btn-outline-info"><span>Log in</span></button>
            </form>
        </div>
    );
}

export default Login;