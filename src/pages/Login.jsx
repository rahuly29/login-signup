import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSignIn = () => {
      // Retrieve user data from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Find the user by email
      const user = users.find((user) => user.email === email);
  
      if (!user) {
        setError('User not found');
        return;
      }
  
      
      if (user.password === password) {
        
        navigate('/Dashboard');
      } else {
        setError('Incorrect password');
      }
    };
  

  return (
    <div>
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="button"
            onClick={handleSignIn}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <p className="forgot-password text-left">
          Not registered <a href="/sign-up">sign up?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
