// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DoctorSearch from './pages/DoctorSearch';
import AboutUs from './pages/AboutUs';


const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/DoctorSearch" element={<DoctorSearch />} />
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
      </Router>
    );
};

export default App;
