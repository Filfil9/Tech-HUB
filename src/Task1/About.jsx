// About.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function About() {
    return (
        <>
        <section className="hero">
            <h2>About TECH HUB</h2>
            <p>We are a tech learning platform that empowers students through coding, projects, and real-life experience.</p>
        </section>

        <section className="main-content">
            <div className="card">
            <h4>Our Mission</h4>
            <p>To make tech education simple, fun, and accessible for everyone.</p>
            </div>
            <div className="card">
            <h4>Our Vision</h4>
            <p>To build a global community of tech learners and creators.</p>
            </div>
        </section>
        </>
    );
}

export default About;