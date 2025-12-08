import React from 'react';
import styles from './ContactPage.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className={styles['contact']}>
            <div className={styles['contact__container']}>
                <h1 className={styles['contact__title']}>Get in Touch</h1>

                <div className={styles['contact__grid']}>
                    <div className={styles['contact__info']}>
                        <div className={styles['contact__info-item']}>
                            <span className={styles['contact__label']}>
                                <FaMapMarkerAlt /> Visit Us
                            </span>
                            <span className={styles['contact__value']}>
                                Av. Bonampak SM 6, Manzana 1<br />
                                Plaza Malecón Américas<br />
                                77500 Cancún, Q.R., Mexico
                            </span>
                        </div>

                        <div className={styles['contact__info-item']}>
                            <span className={styles['contact__label']}>
                                <FaPhone /> Call Us
                            </span>
                            <span className={styles['contact__value']}>
                                +52 (998) 123-4567<br />
                                +52 (998) 987-6543
                            </span>
                        </div>

                        <div className={styles['contact__info-item']}>
                            <span className={styles['contact__label']}>
                                <FaEnvelope /> Email Us
                            </span>
                            <span className={styles['contact__value']}>
                                info@inmobiliapp.com<br />
                                sales@inmobiliapp.com
                            </span>
                        </div>
                    </div>

                    <form className={styles['contact__form']}>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className={styles['contact__input']} 
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className={styles['contact__input']} 
                        />
                        <textarea 
                            placeholder="How can we help you?" 
                            className={styles['contact__textarea']}
                        ></textarea>
                        <button type="button" className={styles['contact__btn']}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;