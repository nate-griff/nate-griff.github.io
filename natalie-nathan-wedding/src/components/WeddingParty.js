import React from 'react';

const WeddingParty = () => {
    const bridalParty = [
        {
            name: 'Emily Johnson',
            role: 'Maid of Honor',
            description: 'Natalie’s sister and best friend, Emily has been by her side through thick and thin.'
        },
        {
            name: 'Sarah Smith',
            role: 'Bridesmaid',
            description: 'A college friend who has shared countless memories with Natalie.'
        },
        {
            name: 'Michael Brown',
            role: 'Best Man',
            description: 'Nathan’s childhood friend who knows all his secrets.'
        },
        {
            name: 'David Wilson',
            role: 'Groomsman',
            description: 'A close friend from Nathan’s college days, always ready for an adventure.'
        }
    ];

    return (
        <div className="wedding-party">
            <h2>Wedding Party</h2>
            <div className="party-members">
                {bridalParty.map((member, index) => (
                    <div key={index} className="party-member">
                        <h3>{member.name}</h3>
                        <p><strong>{member.role}</strong></p>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingParty;