import React from 'react';

const Schedule = () => {
    return (
        <div className="schedule">
            <h2>Schedule of Events</h2>
            <ul>
                <li>
                    <strong>Ceremony:</strong> 
                    <br />
                    Date: [Insert Date]
                    <br />
                    Time: [Insert Time]
                    <br />
                    Location: [Insert Venue Name]
                    <br />
                    Address: [Insert Address]
                </li>
                <li>
                    <strong>Reception:</strong> 
                    <br />
                    Time: [Insert Time]
                    <br />
                    Location: [Insert Venue Name]
                    <br />
                    Address: [Insert Address]
                </li>
                <li>
                    <strong>Additional Celebrations:</strong> 
                    <br />
                    Date: [Insert Date]
                    <br />
                    Time: [Insert Time]
                    <br />
                    Location: [Insert Venue Name]
                    <br />
                    Address: [Insert Address]
                </li>
            </ul>
        </div>
    );
};

export default Schedule;