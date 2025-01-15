import React from 'react';

const GiftRegistry = () => {
    return (
        <div className="gift-registry">
            <h2>Gift Registry</h2>
            <p>We are so grateful for your love and support as we start our new life together. If you wish to bless us with a gift, we have registered at the following stores:</p>
            <ul>
                <li>
                    <a href="https://www.store1.com" target="_blank" rel="noopener noreferrer">Store 1</a>
                </li>
                <li>
                    <a href="https://www.store2.com" target="_blank" rel="noopener noreferrer">Store 2</a>
                </li>
                <li>
                    <a href="https://www.store3.com" target="_blank" rel="noopener noreferrer">Store 3</a>
                </li>
            </ul>
            <p>Your presence at our wedding is the greatest gift of all!</p>
        </div>
    );
};

export default GiftRegistry;