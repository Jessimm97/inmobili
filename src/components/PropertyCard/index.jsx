import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css';
import { FaBed, FaBath, FaBuilding } from "react-icons/fa";

const PropertyCard = ({ propertyData, onInquiry }) => {

    if (!propertyData) {
        return null;
    }

    const { id, price, bedrooms, bathrooms, stories, image } = propertyData;

    return (
        <div className={styles['property-card']}>
            <img 
                src="/images/exampleHouse.svg"
                alt="Property" 
                className={styles['property-card__image']} 
            />
            <div className={styles['property-card__content']}>
                <span className={styles['property-card__price']}>
                    {price}
                </span>
                
                <div className={styles['property-card__stats']}>
                    <span><FaBed /> {bedrooms} Beds</span>
                    <span><FaBath /> {bathrooms} Baths</span>
                    <span><FaBuilding /> {stories} Story</span>
                </div>

                <div className={styles['property-card__actions']}>
                    <Link to={`/property/${id}`} style={{ flex: 1, display: 'flex' }}>
                        <button className={`${styles['property-card__btn']} ${styles['property-card__btn--secondary']}`}>
                            Details
                        </button>
                    </Link>
                    <button 
                        onClick={() => onInquiry(propertyData)}
                        className={`${styles['property-card__btn']} ${styles['property-card__btn--primary']}`}
                    >
                        Inquire
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;