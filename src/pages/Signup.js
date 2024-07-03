// src/pages/Signup.js
import React from 'react';

const Signup = () => {
    return (
        <div>
            <h2>Signup</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
