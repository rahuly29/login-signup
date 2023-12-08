import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  // Initialize user details state
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the userDetails state
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSignUp = () => { 
    if (
        userDetails.firstName.trim() === '' ||
        userDetails.lastName.trim() === '' ||
        userDetails.email.trim() === '' ||
        userDetails.password.trim() === ''
      ) {
        alert('Please fill in all fields before signing up.');
        return;
      }

    // Retrieve existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(userDetails);

    // Store the updated user list in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Reset the form fields
    setUserDetails({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    navigate('/Login')
  };

  return (
    <div>
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First name"
            value={userDetails.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last name"
            value={userDetails.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            value={userDetails.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid">
          <button
            type="button"
            onClick={handleSignUp}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
