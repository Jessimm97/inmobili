import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';

// Import Icons
import { FaHome, FaBuilding, FaInfoCircle, FaPhone } from "react-icons/fa";

const NavBar = () => {
    
    // Helper function to handle the Active Class logic neatly
    const navLinkClass = ({ isActive }) => {
        // Always return the base class
        let classes = styles['navbar__link'];
        // If active, append the modifier
        if (isActive) {
            classes += ` ${styles['navbar__link--active']}`;
        }
        return classes;
    };

    return (
        <nav className={styles['navbar']}>
            
            {/* 1. LOGO (Clicking takes you Home) */}
            <Link to="/" className={styles['navbar__logo']}>
                <FaHome /> 
                Inmobili<span>App</span>
            </Link>

            {/* 2. LINKS */}
            <div className={styles['navbar__links']}>
                
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>

                <NavLink to="/properties" className={navLinkClass}>
                    <FaBuilding /> Properties
                </NavLink>

                {/* Placeholder links for now */}
                <NavLink to="/about" className={navLinkClass}>
                    <FaInfoCircle /> About
                </NavLink>

                <NavLink to="/contact" className={navLinkClass}>
                    <FaPhone /> Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;