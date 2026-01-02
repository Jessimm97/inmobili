import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css';
import { FaBed, FaBath, FaBuilding } from "react-icons/fa";

// CORRECCIÓN 1: Cambiamos las props para que coincidan con PropertiesPage
// Antes: ({ propertyData, onInquiry })
// Ahora: ({ property, onInquire })
const PropertyCard = ({ property, onInquire }) => {

    // CORRECCIÓN 2: Validamos 'property'
    if (!property) {
        return null;
    }

    // CORRECCIÓN 3: Desestructuramos los nombres exactos que vienen del Servicio
    // El servicio envía 'img' (no image) y 'baths' (no bathrooms)
    const { id, title, price, bedrooms, baths, stories, img } = property;

    return (
        <div className={styles['property-card']}>
            <img 
                src={img} // CORRECCIÓN 4: Usamos la variable 'img' real, no la estática
                alt="Property" 
                className={styles['property-card__image']}
                // Agregamos esto por si la URL de base de datos falla, cargue el SVG
                onError={(e) => { e.target.src = "/images/exampleHouse.svg" }}
            />
            <div className={styles['property-card__content']}>
                <span className={styles['property-card__title']}>
                    {title}
                </span>
                <span className={styles['property-card__price']}>
                    {price}
                </span>
                
                <div className={styles['property-card__stats']}>
                    <span><FaBed /> {bedrooms} Beds</span>
                    {/* CORRECCIÓN 5: Usamos variable 'baths' */}
                    <span><FaBath /> {baths} Baths</span>
                    <span><FaBuilding /> {stories} Story</span>
                </div>

                <div className={styles['property-card__actions']}>
                    <Link to={`/property/${id}`} style={{ flex: 1, display: 'flex' }}>
                        <button className={`${styles['property-card__btn']} ${styles['property-card__btn--secondary']}`}>
                            Details
                        </button>
                    </Link>
                    <button 
                        // CORRECCIÓN 6: Usamos la función 'onInquire' recibida
                        onClick={() => onInquire(property)}
                        className={`${styles['property-card__btn']} ${styles['property-card__btn--primary']}`}
                    >
                        Inquire
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;