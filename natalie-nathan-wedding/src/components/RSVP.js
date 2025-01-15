import React, { useState } from 'react';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: '',
        guests: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        console.log('RSVP submitted:', formData);
        alert('Thank you for your response!');
        setFormData({
            name: '',
            email: '',
            attending: '',
            guests: 0,
        });
    };

    return (
        <div className="rsvp-container">
            <h2>RSVP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Will you be attending?</label>
                    <select
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label>Number of Guests:</label>
                    <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <button type="submit">Submit RSVP</button>
            </form>
        </div>
    );
};

export default RSVP;