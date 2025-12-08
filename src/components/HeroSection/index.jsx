import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

// PROPS: We accept 'count' so the parent can tell us the number
const HeroSection = ({ count }) => {
    return (
        <section className={styles['hero-section']}>
            <h1 className={styles['hero-section__title']}>
                Find Your Dream <br /> 
                Home in <span>Cancún</span>
            </h1>

            <div className={styles['hero-section__counter']}>
                Currently listing <span className={styles['hero-section__count-number']}>{count}</span> exclusive properties
            </div>

            <Link to="/properties" className={styles['hero-section__btn']}>
                View All Properties
            </Link>
        </section>
    );
};

export default HeroSection;