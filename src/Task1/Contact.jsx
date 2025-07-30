// contact.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function Contact() {
    return (
        <>
        <Header />
        <section className="hero">
            <h2>Contact Us</h2>
            <p>Have questions or need support? We'd love to hear from you!</p>
        </section>

        <section className="main-content">
            <div className="card">
            <h4>Email</h4>
            <p>support@techhub.com</p>
            </div>
            <div className="card">
            <h4>Phone</h4>
            <p>+964 770 000 0000</p>
            </div>
            <div className="card">
            <h4>Follow Us</h4>
            <p>Facebook | Instagram | GitHub</p>
            </div>
        </section>
        
        <Footer />
        </>
    );
}

export default Contact;