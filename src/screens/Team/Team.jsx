import React, { useState } from 'react';
import './style.css';
import emailjs from '@emailjs/browser';

export const Team = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
    
        try {
            const result = await emailjs.send(
                'service_26ruc37',            // Service ID
                'template_dw8l9lb',           // Template ID
                {
                    from_name: 'MilliBTC Test',
                    from_email: 'test@example.com',
                    message: 'This is a hardcoded test message from MilliBTC form.',
                },
                '0TVsWxLp119ynXUq9'           // Public Key
            );
    
            console.log('EmailJS Success:', result.status, result.text);
            setStatus('Message sent!');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('Failed to send. Try again.');
        }
    };
        
    return (
        <div className='team'>
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit</button>
                <p>{status}</p>
            </form>

            {}
            <div className='content-sections'>
                <section className="team-section">
                    <h2>Meet the MilliBTC Team</h2>
                    <div className="team-grid">
                        {['Brian Jay', 'Dedeep Singu', 'Kat Reagan', 'Toyi Shimizu-Ruffne', 'Abraham Mustafa'].map((name, index) => (
                            <div className="member" key={index}>
                                <img src={`https://via.placeholder.com/300?text=${name.split(' ')[0]}`} alt={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="team-description">
                        <p>
                            We’re students building a convenient, secure payment solution. Our Lightning node on Bitcoinize and BTCPay Server deliver speed—invoice with QR codes or card taps, and funds arrive fast, integrating effortlessly with your online store or in-store setup—making crypto marketable. Stablecoins will take it further.
                        </p>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>Ready to Boost Your Business?</h2>
                </section>

                <section className="info-section">
                    <p>
                        Join MilliBTC for updates on our Lightning node, Bitcoinize terminal, and stablecoin plans. Tap into speed, security, low fees, and a marketable edge—invoice and receive payments via QR codes or card taps, effortlessly integrated with your online store and in-store operations.
                    </p>
                </section>
            </div>
        </div>
    );
};
