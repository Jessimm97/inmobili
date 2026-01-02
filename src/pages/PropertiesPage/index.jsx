import React, { useState, useEffect } from 'react';
import styles from './PropertiesPage.module.css';
import PropertyCard from '../../components/PropertyCard';
import PropertyFilters from '../../components/PropertyFilters';
import InquirySidebar from '../../components/InquirySideBar';
import { getAllProperties, searchProperties } from '../../services/propertiesService'; 

const PropertiesPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Función unificada para cargar datos
    const loadProperties = async (filters = null) => {
        setIsLoading(true);
        try {
            let data;
            // Si hay filtros válidos (keyword, bedrooms o precio), usamos la búsqueda
            const hasActiveFilters = filters && (
                filters.keyword || 
                (filters.bedrooms && filters.bedrooms !== 'all') || 
                filters.maxPrice
            );

            if (hasActiveFilters) {
                console.log("Buscando con filtros:", filters);
                data = await searchProperties(filters);
            } else {
                console.log("Cargando todas las propiedades");
                data = await getAllProperties();
            }
            
            setProperties(data);
        } catch (error) {
            console.error("Error cargando propiedades:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // 1. Carga inicial (sin filtros)
    useEffect(() => {
        loadProperties();
    }, []);

    // 2. Manejador que recibe los filtros desde el hijo (PropertyFilters)
    const handleFilterChange = (newFilters) => {
        loadProperties(newFilters);
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
            <h1 className={styles['properties-page__title']}>Descubre tu Próximo Hogar</h1>
            
            <div className={styles['properties-page__container']}>
                <aside className={styles['properties-page__filters']}>
                    {/* Pasamos la función al componente de filtros */}
                    <PropertyFilters onFilterChange={handleFilterChange} />
                </aside>

                <main className={styles['properties-page__grid']}>
                    {isLoading ? (
                        <p>Buscando propiedades...</p>
                    ) : properties.length > 0 ? (
                        properties.map((property) => (
                            <PropertyCard 
                                key={property.id} 
                                property={property} 
                                onInquire={handleInquiry}
                            />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', width: '100%', padding: '20px', color: '#666' }}>
                            <h3>No encontramos propiedades :</h3>
                            <p>Intenta ajustar tus filtros de búsqueda.</p>
                        </div>
                    )}
                </main>
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