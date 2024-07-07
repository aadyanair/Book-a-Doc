// src/pages/Signup.js
import React from 'react';
import IndianStates from '../components/IndianStates';

const Signup = () => {
    return (
      <div>
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
      </div>
    );
};

export default Signup;
