import React, { useState } from 'react';
import '../App.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const 

  const handleSignup = () => {
    // You can add your signup logic here
    // For simplicity, let's consider the user as signed up if all fields are non-empty
    if (firstName && lastName && email && password && education) {
      setSignedUp(true);
    }
  };

  return (
    <div className="main-container">
      {signedUp ? (
        <div className="welcome-container">
          <h1>Welcome, {firstName}!</h1>
          <p>You have successfully signed up.</p>
        </div>
      ) : (
        <div className="login-container">
          <h1>Signup page</h1>
          <form>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
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
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </label>
            <label>
              Education:
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                placeholder="Enter your education"
              />
            </label>
            <button type="button" onClick={handleSignup}>
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
