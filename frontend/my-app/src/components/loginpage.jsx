// src/components/LoginPage.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Loginpage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://your-authentication-api.com/login', {
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

        // Redirect to another page or perform additional actions as needed
        console.log('Login successful, JWT token:', token);
      } else {
        // Authentication failed
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const sendWelcomeEmail = (userEmail) => {
    const templateParams = {
      to_email: userEmail,
      subject: 'Welcome to Our Website',
      message: 'Thank you for joining our website! We are excited to have you on board.',
    };

    emailjs.send(
      'service_your-service-id',
      'template_your-template-id',
      templateParams,
      'user_your-user-id'
    )
      .then((response) => {
        console.log('Welcome email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending welcome email:', error);
      });
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