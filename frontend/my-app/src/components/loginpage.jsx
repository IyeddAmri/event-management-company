// src/components/LoginPage.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Loginpage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();

        // Save the token to local storage or a secure storage mechanism
        localStorage.setItem('token', token);

        // Send a welcome email (client-side logic)
        sendWelcomeEmail(email);

        // Redirect to the homepage (you can use react-router-dom or any other method)
        window.location.href = '/'; // Change the path as needed
      } else {
        // Authentication failed
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const sendWelcomeEmail = (userEmail) => {
    // ... (same as before)
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
