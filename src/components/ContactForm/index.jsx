import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { createInquiry } from '../../services/inquiryService';

const ContactForm = ({ propertyId }) => {
    // 1. Estado inicial incluyendo el teléfono
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', 
        message: ''
    });
    
    // 2. Estados de UI
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);

        // 3. Mapeo de datos para el Backend (Inquiry.java)
        const payload = {
            clientName: formData.name,
            clientEmail: formData.email,
            clientPhone: formData.phone,
            message: formData.message,
            propertyId: propertyId
        };

        // 4. Llamada al servicio
        const result = await createInquiry(payload);

        setIsLoading(false);

        if (result) {
            setIsSent(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
            setIsError(true);
        }
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
                <label className={styles['contact-form__label']}>Phone</label>
                <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+52 998 123 4567"
                    className={styles['contact-form__input']}
                    value={formData.phone}
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
            
            {isError && (
                <div className={styles['contact-form__error']}>
                    There was an error sending your message. Please try again.
                </div>
            )}

            <button 
                type="submit" 
                className={styles['contact-form__btn']}
                disabled={isLoading}
            >
                {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;