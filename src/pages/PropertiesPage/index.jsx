import React, { useState } from 'react';
import styles from './PropertiesPage.module.css';
import PropertyCard from '../../components/PropertyCard';
import InquirySidebar from '../../components/InquirySideBar'; // Import Sidebar
import PropertyFilters from '../../components/PropertyFilters'; // Import it!
import { propertiesData } from '../../data/properties';

// 1. Create your Mock Data (Array of Objects)


const PropertiesPage = () => {
// 1. STATE: Keep track of which properties are visible
    const [visibleProperties, setVisibleProperties] = useState(propertiesData);

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterChange = (filters) => {
        const { bedrooms, maxPrice } = filters;

        // Filter the Original Mock Data
        const filtered = propertiesData.filter(property => {
            
            // Logic 1: Check Bedrooms
            // If 'all' is selected, it passes. Otherwise check if property.beds >= selected value
            const bedMatch = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);

            // Logic 2: Check Price
            // We must clean the string: "$250,000" -> 250000
            const propertyPriceNumber = parseInt(property.price.replace(/[$,]/g, ""));
            const priceMatch = maxPrice === '' || propertyPriceNumber <= parseInt(maxPrice);

            return bedMatch && priceMatch;
        });

        // Update the state
        setVisibleProperties(filtered);
    };

    // HANDLER: Open Sidebar
    const handleInquiry = (property) => {
        setSelectedProperty(property);
        setIsSidebarOpen(true);
    };

    // HANDLER: Close Sidebar
    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={styles['properties-page']}>
            <h1 className={styles['properties-page__title']}>Available Properties</h1>
            
            <PropertyFilters onFilterChange={handleFilterChange} />

            <div className={styles['properties-page__grid']}>
                {visibleProperties.length > 0 ? (
                    visibleProperties.map((property) => (
                        <PropertyCard 
                            key={property.id}
                            propertyData={property} 
                            onInquiry={handleInquiry} 
                        />
                    ))
                ) : (
                    <p>No properties match your filters.</p>
                )}
            </div>

            {/* Render the Sidebar here, outside the grid */}
            <InquirySidebar 
                isOpen={isSidebarOpen} 
                property={selectedProperty} 
                onClose={handleCloseSidebar}
            />
        </div>
    );
};

export default PropertiesPage;