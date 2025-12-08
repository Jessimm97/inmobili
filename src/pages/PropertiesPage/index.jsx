import React, { useState } from 'react';
import styles from './PropertiesPage.module.css';
import PropertyCard from '../../components/PropertyCard';
import InquirySidebar from '../../components/InquirySideBar'; 
import PropertyFilters from '../../components/PropertyFilters';
import { propertiesData } from '../../data/properties';

const PropertiesPage = () => {
    const [visibleProperties, setVisibleProperties] = useState(propertiesData);

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterChange = (filters) => {
        const { bedrooms, maxPrice } = filters;
        const filtered = propertiesData.filter(property => {
            const bedMatch = bedrooms === 'all' || property.bedrooms >= parseInt(bedrooms);
            const propertyPriceNumber = parseInt(property.price.replace(/[$,]/g, ""));
            const priceMatch = maxPrice === '' || propertyPriceNumber <= parseInt(maxPrice);
            return bedMatch && priceMatch;
        });
        setVisibleProperties(filtered);
    };

    const handleInquiry = (property) => {
        setSelectedProperty(property);
        setIsSidebarOpen(true);
    };

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
            <InquirySidebar 
                isOpen={isSidebarOpen} 
                property={selectedProperty} 
                onClose={handleCloseSidebar}
            />
        </div>
    );
};

export default PropertiesPage;