// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function Header() {
    const navigate = useNavigate();
    
    return (
        <header>
        <nav className="header">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/services')}>Services</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
            <button onClick={() => navigate('/what-i-learned')}>What I Learned</button>
            <button onClick={()=> navigate('/posts')}>Posts</button>
        </nav>
        <div className="logo">
            <img src="/tech hub logo-01.png" alt="Tech Hub Logo" />
        </div>
        </header>
    );
}

export default Header;