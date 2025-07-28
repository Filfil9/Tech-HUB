// service.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function Services() {
  return (
    <>
      <section className="hero">
        <h2>Our Services</h2>
        <p>Explore the various services we offer to support your learning journey.</p>
      </section>

      <section className="main-content">
        <div className="card">
          <h4>Online Courses</h4>
          <p>Interactive lessons in web development, cybersecurity, and more.</p>
        </div>
        <div className="card">
          <h4>Live Sessions</h4>
          <p>Join our weekly mentorship and support meetings.</p>
        </div>
        <div className="card">
          <h4>Project Feedback</h4>
          <p>Get expert reviews on your work and improve faster.</p>
        </div>
      </section>
    </>
  );
}

export default Services;