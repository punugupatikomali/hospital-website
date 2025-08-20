import React, { useState } from 'react';
import axios from 'axios';
import '../Signup.css'; // Import the CSS file

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      await axios.post('http://localhost:8080/testdata/add', {
        username,
        email,
        password,
      });
      setSubmitted(true);
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-field">
          <label>
            Username:&nbsp;
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="signup-input"
            />
          </label>
        </div>
        <div className="signup-field">
          <label>
            Email:&nbsp;
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="signup-input"
            />
          </label>
        </div>
        <div className="signup-field">
          <label>
            Password:&nbsp;
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="signup-input"
            />
          </label>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {submitted && (
        <div className="signup-success">
          Signup successful for user: <strong>{username}</strong>
        </div>
      )}
      {error && (
        <div className="signup-error">
          {error}
        </div>
      )}
    </div>
  );
}
