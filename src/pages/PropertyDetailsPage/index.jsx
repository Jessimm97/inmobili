import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PropertyDetailsPage.module.css';
import { FaArrowLeft, FaMapMarkerAlt, FaBed, FaBath, FaBuilding, FaCheck } from "react-icons/fa";
import useDocumentTitle from '../../hooks/useDocumentTitle';
// Components
import AgentCard from '../../components/AgentCard';
import ContactForm from '../../components/ContactForm';
import LocationMap from '../../components/LocationMap';        
import SimilarProperties from '../../components/SimilarProperties'; 

// Data
import { propertiesData } from '../../data/properties';

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const property = propertiesData.find(p => p.id.toString() === id);
    
    useDocumentTitle(property ? property.title : 'Property Details');
    
    if (!property) {
        return (
            <div className={styles['property-details__error']}>
                Property Not Found
            </div>
        );
    }
    

    return (
        <div className={styles['property-details']}>
            
            {/* Back Button */}
            <Link to="/properties" className={styles['property-details__back']}>
                <FaArrowLeft /> Back to List
            </Link>

            {/* Header */}
            <header className={styles['property-details__header']}>
                <div>
                    <h1 className={styles['property-details__title']}>{property.title}</h1>
                    <div className={styles['property-details__location']}>
                        <FaMapMarkerAlt /> {property.location}
                    </div>
                </div>
                <div className={styles['property-details__price']}>
                    {property.price}
                </div>
            </header>

            {/* Gallery */}
            <div className={styles['property-details__gallery']}>
                <img 
                    src={property.img} 
                    alt={property.title} 
                    className={styles['property-details__main-img']} 
                />
            </div>

            {/* Grid */}
            <div className={styles['property-details__grid']}>
                
                {/* Content Column */}
                <div className={styles['property-details__content']}>
                    
                    {/* BEM Stats Bar */}
                    <div className={styles['property-details__stats']}>
                        <span className={styles['property-details__stat-item']}>
                            <FaBed className={styles['property-details__icon']} /> 
                            {property.bedrooms} Beds
                        </span>
                        <span className={styles['property-details__stat-item']}>
                            <FaBath className={styles['property-details__icon']} /> 
                            {property.baths} Baths
                        </span>
                        <span className={styles['property-details__stat-item']}>
                            <FaBuilding className={styles['property-details__icon']} /> 
                            {property.stories} Stories
                        </span>
                    </div>

                    <h2>Description</h2>
                    <p className={styles['property-details__description']}>
                        {property.description}
                    </p>

                    <h2>Features</h2>
                    {/* BEM Features List */}
                    <ul className={styles['property-details__features']}>
                        {property.features.map((feature, index) => (
                            <li key={index} className={styles['property-details__feature-item']}>
                                <FaCheck color="green" size={14} /> {feature}
                            </li>
                        ))}
                    </ul>

                    {/* BEM Mortgage Placeholder */}
                    <LocationMap location={property.location} />
                    <SimilarProperties currentProperty={property} />
                </div>

                {/* Sidebar Column */}
                <aside className={styles['property-details__sidebar']}>
                    <AgentCard agent={property.agent} />
                    <ContactForm propertyId={property.id} />
                </aside>

            </div>
        </div>
    );
};

export default PropertyDetailsPage;