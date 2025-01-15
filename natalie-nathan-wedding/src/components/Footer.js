import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Natalie & Nathan. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#introduction">Our Story</a></li>
                    <li><a href="#wedding-details">Wedding Details</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#rsvp">RSVP</a></li>
                    <li><a href="#travel">Travel & Accommodations</a></li>
                    <li><a href="#gift-registry">Gift Registry</a></li>
                    <li><a href="#photo-gallery">Photo Gallery</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#wedding-party">Wedding Party</a></li>
                    <li><a href="#special-traditions">Special Traditions</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;