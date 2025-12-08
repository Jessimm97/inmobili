import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteFooter.module.css';

// Import Icons
import { FaFacebook, FaInstagram, FaTwitter, FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const SiteFooter = () => {
    return (
        <footer className={styles['site-footer']}>
            <div className={styles['site-footer__grid']}>
                
                {/* COLUMN 1: About */}
                <div className={styles['site-footer__col']}>
                    <h3>InmobiliApp</h3>
                    <p className={styles['site-footer__text']}>
                        Your trusted partner in finding the perfect home in Cancún. 
                        Luxury, comfort, and best prices guaranteed.
                    </p>
                    <div className={styles['site-footer__socials']}>
                        <FaFacebook className={styles['site-footer__social-icon']} />
                        <FaInstagram className={styles['site-footer__social-icon']} />
                        <FaTwitter className={styles['site-footer__social-icon']} />
                    </div>
                </div>

                {/* COLUMN 2: Quick Links */}
                <div className={styles['site-footer__col']}>
                    <h3>Quick Links</h3>
                    <Link to="/" className={styles['site-footer__link']}>Home</Link>
                    <Link to="/properties" className={styles['site-footer__link']}>Properties</Link>
                    <Link to="/about" className={styles['site-footer__link']}>About Us</Link>
                    <Link to="/contact" className={styles['site-footer__link']}>Contact</Link>
                </div>

                {/* COLUMN 3: Contact Info */}
                <div className={styles['site-footer__col']}>
                    <h3>Contact Us</h3>
                    <p className={styles['site-footer__text']}>
                        <FaHome /> Av. Bonampak, Cancún, Mexico
                    </p>
                    <p className={styles['site-footer__text']}>
                        <FaPhone /> +52 (998) 123-4567
                    </p>
                    <p className={styles['site-footer__text']}>
                        <FaEnvelope /> info@inmobiliapp.com
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles['site-footer__bottom']}>
                &copy; {new Date().getFullYear()} InmobiliApp. All rights reserved.
            </div>
        </footer>
    );
};

export default SiteFooter;