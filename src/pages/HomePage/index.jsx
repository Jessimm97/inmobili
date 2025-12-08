import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection';
import { propertiesData } from '../../data/properties';

const HomePage = () => {
    const totalProperties = propertiesData.length;

    return (
        <div className={styles['home']}>
            <HeroSection count={totalProperties} />
        </div>
    );
};

export default HomePage;