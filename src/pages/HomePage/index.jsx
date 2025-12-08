import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection';

// 1. Import the shared data
import { propertiesData } from '../../data/properties';

const HomePage = () => {
    // 2. Calculate the dynamic number
    const totalProperties = propertiesData.length;

    return (
        <div className={styles['home']}>
            
            <HeroSection count={totalProperties} />

            {/* You can add more sections below later (e.g., "Why Choose Us") */}
        </div>
    );
};

export default HomePage;