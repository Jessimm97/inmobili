import React, { useState, useEffect } from 'react'; // 1. Agregamos Hooks
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
// Asegúrate de que este import apunte al archivo .jsx (si es necesario por Docker)
import HeroSection from '../../components/HeroSection'; 
import { getAllProperties } from '../../services/propertiesService'; // 2. Usamos el servicio

const HomePage = () => {
    // 3. Estado local para guardar el conteo (inicia en 0)
    const [totalProperties, setTotalProperties] = useState(0);

    // 4. Efecto para pedir los datos al montar la página
    useEffect(() => {
        const fetchCount = async () => {
            try {
                // Obtenemos el array real de la BD
                const properties = await getAllProperties();
                // Actualizamos el estado con la longitud del array
                setTotalProperties(properties.length);
            } catch (error) {
                console.error("Error cargando contador de propiedades:", error);
                setTotalProperties(0);
            }
        };

        fetchCount();
    }, []);

    return (
        <div className={styles['home']}>
            {/* 5. Pasamos el número dinámico al Hero */}
            <HeroSection count={totalProperties} />
            
            {/* Opcional: Podrías agregar aquí una sección de "Destacados" en el futuro */}
        </div>
    );
};

export default HomePage;