import React from 'react';
import styles from './AgentCard.module.css';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const AgentCard = ({ agent }) => {
    // Safety check
    if (!agent) return null;

    return (
        <div className={styles['agent-card']}>
            <div className={styles['agent-card__avatar-wrapper']}>
                <img 
                    src={agent.photo} 
                    alt={agent.name} 
                    className={styles['agent-card__image']} 
                />
            </div>

            <h3 className={styles['agent-card__name']}>{agent.name}</h3>
            <p className={styles['agent-card__title']}>Real Estate Specialist</p>

            <div className={styles['agent-card__actions']}>
                {/* WhatsApp Button */}
                <a 
                    href={`https://wa.me/${agent.phone}?text=I'm interested in a property`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles['agent-card__btn']} ${styles['agent-card__btn--whatsapp']}`}
                >
                    <FaWhatsapp size={18} /> WhatsApp
                </a>

                {/* Call Button */}
                <a 
                    href={`tel:${agent.phone}`}
                    className={`${styles['agent-card__btn']} ${styles['agent-card__btn--phone']}`}
                >
                    <FaPhoneAlt size={16} /> Call
                </a>
            </div>
        </div>
    );
};

export default AgentCard;