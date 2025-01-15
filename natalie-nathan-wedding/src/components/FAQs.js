import React from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: "What is the dress code for the wedding?",
            answer: "The dress code is semi-formal. We encourage guests to dress elegantly and comfortably."
        },
        {
            question: "Are children invited to the wedding?",
            answer: "We love your little ones, but this will be an adults-only event."
        },
        {
            question: "What should I do if I have dietary restrictions?",
            answer: "Please let us know in your RSVP, and we will do our best to accommodate your needs."
        },
        {
            question: "Is there parking available at the venue?",
            answer: "Yes, there is ample parking available at the venue. Valet service will also be provided."
        },
        {
            question: "What time should I arrive?",
            answer: "We recommend arriving at least 30 minutes before the ceremony starts to ensure you have enough time to find your seat."
        }
    ];

    return (
        <div className="faqs">
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQs;