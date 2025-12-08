import React, { useState } from 'react';
import styles from './PropertyFilters.module.css';

const PropertyFilters = ({ onFilterChange }) => {
    // Local state for the form inputs
    const [filters, setFilters] = useState({
        bedrooms: 'all',
        maxPrice: ''
    });

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // 1. Update local state
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);

        // 2. Send data up to Parent immediately
        onFilterChange(newFilters);
    };

    return (
        <div className={styles['filters']}>
            
            {/* Filter 1: Bedrooms */}
            <div className={styles['filters__group']}>
                <label className={styles['filters__label']}>Bedrooms</label>
                <select 
                    name="bedrooms" 
                    value={filters.bedrooms} 
                    onChange={handleChange}
                    className={styles['filters__select']}
                >
                    <option value="all">Any</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                </select>
            </div>

            {/* Filter 2: Max Price */}
            <div className={styles['filters__group']}>
                <label className={styles['filters__label']}>Max Price ($)</label>
                <input 
                    type="number" 
                    name="maxPrice" 
                    placeholder="e.g. 500000"
                    value={filters.maxPrice} 
                    onChange={handleChange}
                    className={styles['filters__input']}
                />
            </div>

            {/* Optional: Clear Button */}
            <button 
                className={styles['filters__reset']}
                onClick={() => {
                    const reset = { bedrooms: 'all', maxPrice: '' };
                    setFilters(reset);
                    onFilterChange(reset);
                }}
            >
                Clear Filters
            </button>
        </div>
    );
};

export default PropertyFilters;