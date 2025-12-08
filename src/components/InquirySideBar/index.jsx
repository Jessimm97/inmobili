import React from 'react';
import styles from './InquirySidebar.module.css';
import { GoSidebarCollapse } from "react-icons/go";

const InquirySidebar = ({ isOpen, property, onClose }) => {
    const sidebarClass = `${styles.sidebar} ${isOpen ? styles['sidebar--open'] : ''}`;
    const subject = property ? `Information Request: ${property.id}` : 'Inquiry';
    const body = property ? `I am interested in the property priced at ${property.price}.` : '';
    const mailtoLink = `mailto:inmobili@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className={sidebarClass}>
            <button onClick={onClose} className={styles['sidebar__close']}><GoSidebarCollapse/></button>
            
            <h2>Your Inquiry</h2>
            
            {property ? (
                <div className={styles['sidebar__list']}>
                    <h3>Selected Property:</h3>
                    <p><strong>ID:</strong> {property.id}</p>
                    <p><strong>Price:</strong> {property.price}</p>
                </div>
            ) : (
                <p>No property selected.</p>
            )}

            <a href={mailtoLink} className={styles['sidebar__email-btn']}>
                Send a message for information
            </a>
        </div>
    );
};

export default InquirySidebar;