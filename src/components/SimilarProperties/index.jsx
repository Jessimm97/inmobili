import React from 'react';
import styles from './SimilarProperties.module.css';

import PropertyCard from '../PropertyCard';
import { propertiesData } from '../../data/properties'; 

const SimilarProperties = ({ currentProperty }) => {
    
    // Filter Logic:
    // 1. Exclude current ID
    // 2. Match bedrooms (approximate size)
    const similar = propertiesData.filter(item => {
        return (
            item.id !== currentProperty.id && 
            Math.abs(item.bedrooms - currentProperty.bedrooms) <= 1 
        );
    }).slice(0, 3); // Limit to 3 items

    // Don't render anything if no matches found
    if (similar.length === 0) return null;

    return (
        <div className={styles['similar-properties']}>
            <h3 className={styles['similar-properties__title']}>
                You might also like...
            </h3>
            
            <div className={styles['similar-properties__grid']}>
                {similar.map(prop => (
                    <PropertyCard 
                        key={prop.id} 
                        propertyData={prop} 
                        // Empty handler since we just want the link to work
                        onInquiry={() => {}} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SimilarProperties;