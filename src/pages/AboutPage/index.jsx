import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles['about']}>
            <div className={styles['about__container']}>
                <header className={styles['about__header']}>
                    <h1 className={styles['about__title']}>About InmobiliApp</h1>
                    <p className={styles['about__subtitle']}>Your trusted partner in Cancún real estate</p>
                </header>

                <div className={styles['about__content']}>
                    <div className={styles['about__text-wrapper']}>
                        <p className={styles['about__text']}>
                            Founded in 2015, InmobiliApp has established itself as the premier luxury real estate agency in the Mexican Caribbean. We specialize in exclusive properties, from beachfront villas in the Hotel Zone to modern apartments in Puerto Cancún.
                        </p>
                        <p className={styles['about__text']}>
                            Our mission is simple: to connect our clients with their dream lifestyle. Whether you are looking for a vacation home, an investment property, or a permanent residence, our team of dedicated agents is here to guide you every step of the way.
                        </p>
                    </div>
                    <img 
                        src="/images/exampleHouse.svg" 
                        alt="Our Team" 
                        className={styles['about__image']} 
                    />
                </div>

                <div className={styles['about__stats']}>
                    <div className={styles['about__stat-item']}>
                        <span className={styles['about__stat-number']}>10+</span>
                        <span className={styles['about__stat-label']}>Years Experience</span>
                    </div>
                    <div className={styles['about__stat-item']}>
                        <span className={styles['about__stat-number']}>500+</span>
                        <span className={styles['about__stat-label']}>Properties Sold</span>
                    </div>
                    <div className={styles['about__stat-item']}>
                        <span className={styles['about__stat-number']}>24/7</span>
                        <span className={styles['about__stat-label']}>Client Support</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;