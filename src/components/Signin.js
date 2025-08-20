import React, { useState } from 'react';
import '../signin.css';

function Signin({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple check (replace with real authentication logic)
        if (username === 'admin' && password === 'pass') {
            setMessage('Login successful!');
            onLoginSuccess();
        } else {
            setMessage('Invalid username or password');
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-heading">Login</h2>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="signin-row">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="signin-input"
                        required
                    />
                </div>
                <div className="signin-row">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signin-input"
                        required
                    />
                </div>
                <button type="submit" className="signin-btn">Sign In</button>
                New User? <a href="/signup">Create an account</a>
            </form>
            {message && (
                <p className="signin-message" style={{ color: message === 'Login successful!' ? '#3a7bd5' : 'red' }}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default Signin;