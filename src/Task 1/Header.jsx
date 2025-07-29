// Header.jsx
import React from 'react';
import '../../first task/style.css';

function Header() {
    return (
        <header>
        <nav className="header">
            <button onClick={() => window.location.href='Home.html'}>Home</button>
            <button onClick={() => window.location.href='About.html'}>About</button>
            <button onClick={() => window.location.href='service.html'}>Services</button>
            <button onClick={() => window.location.href='contact.html'}>Contact</button>
        </nav>
        <div className="logo">
            <img src="tech hub logo-01.png" alt="Tech Hub Logo" />
        </div>
        </header>
    );
}

export default Header;