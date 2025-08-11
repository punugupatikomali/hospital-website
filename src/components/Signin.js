import React, { useState } from 'react';

function Signin({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple check (replace with real authentication logic)
        
        if (username === 'admin' && password === 'pass') {
            setMessage('Login successful!');
            onLoginSuccess(); // Trigger App.js state change
        } else {
            setMessage('Invalid username or password');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '0.5rem' }}>Sign In</button>
            </form>
            {message && <p style={{ color: message === 'Login successful!' ? 'green' : 'red' }}>{message}</p>}
        </div>
    );
}

export default Signin;
