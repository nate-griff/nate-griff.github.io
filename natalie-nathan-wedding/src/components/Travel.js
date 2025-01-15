import React from 'react';

const Travel = () => {
    return (
        <div className="travel-section">
            <h2>Travel and Accommodations</h2>
            <p>We are excited to welcome you to our wedding! Here are some recommendations for nearby hotels and travel tips:</p>
            
            <h3>Nearby Hotels</h3>
            <ul>
                <li>
                    <strong>Hotel One</strong><br />
                    123 Main St, City, State, ZIP<br />
                    <a href="https://www.hotelone.com" target="_blank" rel="noopener noreferrer">Website</a>
                </li>
                <li>
                    <strong>Hotel Two</strong><br />
                    456 Elm St, City, State, ZIP<br />
                    <a href="https://www.hoeltwo.com" target="_blank" rel="noopener noreferrer">Website</a>
                </li>
                <li>
                    <strong>Hotel Three</strong><br />
                    789 Oak St, City, State, ZIP<br />
                    <a href="https://www.hotelthree.com" target="_blank" rel="noopener noreferrer">Website</a>
                </li>
            </ul>

            <h3>Transportation Tips</h3>
            <p>For those flying in, the nearest airport is XYZ Airport. We recommend renting a car or using rideshare services for convenience.</p>

            <h3>Parking Details</h3>
            <p>There will be ample parking available at the venue. Please follow the signs upon arrival.</p>

            <h3>Blocked Room Options</h3>
            <p>We have reserved a block of rooms at Hotel One. Please mention our wedding when booking to receive a special rate.</p>
        </div>
    );
};

export default Travel;