import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/Doc2.png'; // Ensure this path is correct
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h1 className="hero-heading">Booking a Doctor's Appointment Made Easy</h1>
                    <p className="hero-text">Schedule your appointments online, quickly and conveniently, from the comfort of your home.</p>
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-content">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <p>Our platform connects you with top healthcare providers, making it simple to find the perfect match for your needs.</p>
                    <p>With our user-friendly interface, you can browse through a wide range of doctors and healthcare professionals, ensuring you get the best care possible.</p>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="customer-reviews">
                <div className="container">
                    <h2>Customer Reviews</h2>
                    <div className="review">
                        <blockquote>"Booking appointments has never been easier! Highly recommended."</blockquote>
                        <cite>- John Doe, Patient</cite>
                    </div>
                    <div className="review">
                        <blockquote>"I love how convenient it is to find a doctor based on my needs. Great service!"</blockquote>
                        <cite>- Jane Smith, Patient</cite>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Book Your Appointment?</h2>
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
