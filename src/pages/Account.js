// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <h2 className="center headingText">Account Details</h2>
      <div className="detailsBox">
        <table>
          <tr>
            <th>Name: </th>
            <th>Naveen George Joseph</th>
          </tr>
          <tr>
            <th>Date of Birth: &nbsp;&nbsp;</th>
            <th>20-07-2024</th>
          </tr>
          <tr>
            <th>Gender:</th>
            <th>Male</th>
          </tr>
          <tr>
            <th>Location:</th>
            <th>Karnataka</th>
          </tr>
          <tr>
            <th>Mail Id:</th>
            <th>naveengjoseph@gmail.com</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Account;
