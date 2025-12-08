import React from 'react';
import styles from './LocationMap.module.css';

const LocationMap = ({ location }) => {
    // 1. Sanitize the location string for the URL
    const query = encodeURIComponent(`${location}, Cancun, Mexico`);
    
    // 2. Correct Google Maps Embed URL structure
    const mapSrc = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className={styles['location-map']}>
            <h2 className={styles['location-map__title']}>Location</h2>
            
            <iframe 
                className={styles['location-map__frame']}
                title="Property Location"
                src={mapSrc}
                loading="lazy"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LocationMap;