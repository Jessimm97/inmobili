import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ propertyId }) => {
    // 1. STATE: Track form values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // 2. STATE: Track if message was sent
    const [isSent, setIsSent] = useState(false);

    // Handler: Update state when user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler: Simulate sending email
    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page from refreshing
        
        // Simulating an API call...
        console.log("Sending data for Property ID:", propertyId);
        console.log("Form Data:", formData);

        // Show success message
        setIsSent(true);

        // Reset form after 3 seconds (optional)
        // setTimeout(() => setIsSent(false), 3000);
    };

    // RENDER: If sent, show success message
    if (isSent) {
        return (
            <div className={styles['contact-form--success']}>
                <strong>Thank you!</strong><br/>
                Your message has been sent to the agent.
            </div>
        );
    }

    // RENDER: The Form
    return (
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className={styles['contact-form__group']}>
                <label className={styles['contact-form__label']}>Full Name</label>
                <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className={styles['contact-form__input']}
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles['contact-form__group']}>
                <label className={styles['contact-form__label']}>Email</label>
                <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className={styles['contact-form__input']}
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className={styles['contact-form__group']}>
                <label className={styles['contact-form__label']}>Message</label>
                <textarea 
                    name="message"
                    required
                    placeholder={`I'm interested in property ID: ${propertyId}...`}
                    className={styles['contact-form__textarea']}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className={styles['contact-form__btn']}>
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;