import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const desiredName = "Karl Munyoro Kamau";
    const desiredPassword = "06022006";
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === desiredName && password === desiredPassword) {
            navigate('/home');
        } else {
            alert("Try again :(")
        }
    }

    return (
        <div className="login-div">
            <h2>Protocol ;)</h2>
            <p style={{color: '#6e6e6e', marginTop: '20px'}}>(Wouldn't want anyone knowing I'm actually nice to you)</p>
            <form onSubmit={handleSubmit} className="login-form">
                <p>Name</p>
                <input
                  type="name"
                  placeholder="John Doe Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button btn btn-outline-info"><span>Log in</span></button>
            </form>
        </div>
    );
}

export default Login;