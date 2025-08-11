import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/testdata/add', {
        username,
        password,
      });
      setSubmitted(true);
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:&nbsp;
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{ marginTop: 10 }}>
          <label>
            Password:&nbsp;
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: 15 }}>Sign Up</button>
      </form>
      {submitted && (
        <div style={{ color: 'green', marginTop: 15 }}>
          Signup successful for user: <strong>{username}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: 'red', marginTop: 15 }}>
          {error}
        </div>
      )}
    </div>
  );
}
