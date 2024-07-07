// src/pages/Login.js
import React from 'react';

const Login = () => {
    return (
      <div>
        <h2 className="center headingText">Login</h2>
        <form className="flexCol">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='blueButton' type="submit">Login</button>
        </form>
      </div>
    );
};

export default Login;
