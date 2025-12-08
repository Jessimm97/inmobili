import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ propertyId }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending data for Property ID:", propertyId);
        console.log("Form Data:", formData);
        setIsSent(true);
    };

    if (isSent) {
        return (
            <div className={styles['contact-form--success']}>
                <strong>Thank you!</strong><br/>
                Your message has been sent to the agent.
            </div>
        );
    }

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