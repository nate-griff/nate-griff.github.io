import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1>Natalie & Nathan's Wedding</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/introduction">Our Story</Link></li>
                    <li><Link to="/wedding-details">Wedding Details</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/rsvp">RSVP</Link></li>
                    <li><Link to="/travel">Travel & Accommodations</Link></li>
                    <li><Link to="/gift-registry">Gift Registry</Link></li>
                    <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/wedding-party">Wedding Party</Link></li>
                    <li><Link to="/special-traditions">Special Traditions</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;