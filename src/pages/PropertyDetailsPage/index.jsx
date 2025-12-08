import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PropertyDetailsPage.module.css';
import { FaArrowLeft, FaMapMarkerAlt, FaBed, FaBath, FaBuilding, FaCheck } from "react-icons/fa";
import useDocumentTitle from '../../hooks/useDocumentTitle';
import AgentCard from '../../components/AgentCard';
import ContactForm from '../../components/ContactForm';
import LocationMap from '../../components/LocationMap';        
import SimilarProperties from '../../components/SimilarProperties'; 
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
            <Link to="/properties" className={styles['property-details__back']}>
                <FaArrowLeft /> Back to List
            </Link>
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
            <div className={styles['property-details__gallery']}>
                <img 
                    src={property.img} 
                    alt={property.title} 
                    className={styles['property-details__main-img']} 
                />
            </div>
            <div className={styles['property-details__grid']}>
                <div className={styles['property-details__content']}>
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
                    <ul className={styles['property-details__features']}>
                        {property.features.map((feature, index) => (
                            <li key={index} className={styles['property-details__feature-item']}>
                                <FaCheck color="green" size={14} /> {feature}
                            </li>
                        ))})
                    </ul>
                    <LocationMap location={property.location} />
                    <SimilarProperties currentProperty={property} />
                </div>
                <aside className={styles['property-details__sidebar']}>
                    <AgentCard agent={property.agent} />
                    <ContactForm propertyId={property.id} />
                </aside>

            </div>
        </div>
    );
};

export default PropertyDetailsPage;