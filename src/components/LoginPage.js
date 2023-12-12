import React, { useState } from 'react';
import '../App.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can add your authentication logic here
    // For simplicity, let's consider the user as logged in if both fields are non-empty
    if (username && password) {
      setLoggedIn(true);
    }
  };
  return (
    <div className="main-container">
      {loggedIn ? (
        <div className="welcome-container">
          <h1>Welcome, {username}!</h1>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div className="login-container">
          <h1>Login page</h1>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <p style={{fontSize:20}}>
                or
            </p>
            <button type="button" onClick={handleLogin}>
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;