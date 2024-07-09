// src/pages/Login.js
import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div>
        <h2 className="center headingText">Login</h2>
        <form className="flexCol">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='blueButton' type="submit">Login</button>
          <h5 className="loginRedirectLink">
          <Link className="nav-link" to="/signup">
            New here? <br/> Create an Account.
          </Link>
        </h5>
        </form>
      </div>
    );
};

export default Login;
