import React, { useState, useEffect } from 'react';
import styles from './SimilarProperties.module.css';

// Asegúrate de importar el archivo .jsx explícitamente para Docker
import PropertyCard from '../PropertyCard';
// Importamos el servicio para obtener datos reales
import { getAllProperties } from '../../services/propertiesService'; 

const SimilarProperties = ({ currentProperty }) => {
    // 1. Estado local para guardar las propiedades similares encontradas
    const [similar, setSimilar] = useState([]);

    // 2. Efecto para buscar y filtrar cuando cambia la propiedad actual
    useEffect(() => {
        const fetchSimilarProperties = async () => {
            if (!currentProperty) return;

            try {
                // Obtenemos todas las propiedades de la BD
                const allProperties = await getAllProperties();

                // Aplicamos TU lógica de filtrado original:
                // - Que no sea la misma propiedad (ID diferente)
                // - Que tenga un número de habitaciones similar (+/- 1)
                const filtered = allProperties.filter(item => {
                    return (
                        item.id !== currentProperty.id && 
                        Math.abs(item.bedrooms - currentProperty.bedrooms) <= 1 
                    );
                }).slice(0, 3); // Tomamos solo las 3 primeras

                setSimilar(filtered);
            } catch (error) {
                console.error("Error loading similar properties:", error);
            }
        };

        fetchSimilarProperties();
    }, [currentProperty]);

    // Si no hay similares, no mostramos nada
    if (similar.length === 0) return null;

    return (
        <div className={styles['similar-properties']}>
            <h3 className={styles['similar-properties__title']}>
                You might also like...
            </h3>
            
            <div className={styles['similar-properties__grid']}>
                {similar.map(prop => (
                    <PropertyCard 
                        key={prop.id} 
                        // CAMBIO IMPORTANTE: 
                        // Usamos la prop 'property' que definimos cuando arreglamos PropertyCard
                        property={prop} 
                        
                        // Función vacía porque aquí solo nos interesa que el usuario
                        // haga click en la tarjeta para ir a verla (el Link interno de la card)
                        onInquire={() => {}} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SimilarProperties;