// src/pages/Signup.js
import React from 'react';
import IndianStates from '../components/IndianStates';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
      <div className='signupContainer'>
        <h2 className="center headingText">Signup</h2>
        <form className="flexCol">
          <input type="text" placeholder="Full Name" />
          <label for="dob">Date of Birth:</label>
          <input type="date" />
          <label for="gender">Gender:</label>
          <select name="gender" id="gender">
            <option value="Gender">Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <IndianStates></IndianStates>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="blueButton" type="submit">
            Create Account
          </button>
        </form>
        <h5 className="loginRedirectLink">
          <Link className="nav-link" to="/login">
            Already have an account? <br/> Login
          </Link>
        </h5>
      </div>
    );
};

export default Signup;
