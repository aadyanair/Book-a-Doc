// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-us-container'>
            <h2>About Us</h2>
            <section>
                <h3>Introduction</h3>
                <p>Welcome to Book a Doctor, your trusted platform for easy and convenient doctor appointments. Our mission is to provide a seamless healthcare experience by connecting patients with the best healthcare providers.</p>
            </section>
            <section>
                <h3>Our Mission</h3>
                <p>At Book a Doctor, our mission is to revolutionize the way patients access healthcare services. We strive to make healthcare more accessible, efficient, and user-friendly. Our platform enables you to book appointments with top-rated doctors at your convenience.</p>
            </section>
            <section>
                <h3>Our Story</h3>
                <p>Our journey began with a simple idea: to eliminate the hassle of booking doctor appointments. Since our inception in [Year], we've grown into a comprehensive healthcare platform, partnering with numerous healthcare providers to bring you the best services.</p>
            </section>
            <section>
                <h3>Our Team</h3>
                <ul className='team-list'>
                    <li>Aadya Nair</li>
                    <li>Naveen George Joseph</li>
                    <li>Mihir Rana</li>
                    <li>Snigdha</li>
                </ul>
            </section>
            <section>
                <h3>Contact Information</h3>
                <ul className='contact-list'>
                    <li>Email: support@bookadoctor.com</li>
                    <li>Phone: 123-456-7890</li>
                    <li>Address: VIT, India</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
