import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';

import { FaHome, FaBuilding, FaInfoCircle, FaPhone } from "react-icons/fa";

const NavBar = () => {
    const navLinkClass = ({ isActive }) => {
        let classes = styles['navbar__link'];
        if (isActive) {
            classes += ` ${styles['navbar__link--active']}`;
        }
        return classes;
    };

    return (
        <nav className={styles['navbar']}>
            <Link to="/" className={styles['navbar__logo']}>
                <FaHome /> 
                Inmobili<span>App</span>
            </Link>
            <div className={styles['navbar__links']}>
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/properties" className={navLinkClass}>
                    <FaBuilding /> Properties
                </NavLink>
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