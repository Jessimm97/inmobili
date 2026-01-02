import React, { useState, useEffect } from 'react'; // 1. Importamos hooks
import { useParams, Link } from 'react-router-dom';
import styles from './PropertyDetailsPage.module.css';
import { FaArrowLeft, FaMapMarkerAlt, FaBed, FaBath, FaBuilding, FaCheck } from "react-icons/fa";
import useDocumentTitle from '../../hooks/useDocumentTitle';

// IMPORTANTE: Asegura que las importaciones apunten a .jsx para evitar errores en Docker
import AgentCard from '../../components/AgentCard'; 
import ContactForm from '../../components/ContactForm';
import LocationMap from '../../components/LocationMap';        
import SimilarProperties from '../../components/SimilarProperties'; 

// 2. Importamos el servicio en lugar del archivo JSON estático
import { getPropertyById } from '../../services/propertiesService';

const PropertyDetailsPage = () => {
    const { id } = useParams();

    // 3. Estado para manejar los datos asíncronos
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    // 4. Efecto para cargar los datos desde el Backend cuando cambia el ID
    useEffect(() => {
        const fetchPropertyData = async () => {
            setIsLoading(true);
            try {
                const data = await getPropertyById(id);
                setProperty(data);
            } catch (error) {
                console.error("Error loading property details:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPropertyData();
    }, [id]);

    useDocumentTitle(property ? property.title : 'Property Details');
    
    // 5. Estado de Carga (Opcional: puedes darle estilo en tu CSS)
    if (isLoading) {
        return (
            <div className={styles['property-details']} style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <p>Cargando detalles...</p>
            </div>
        );
    }

    // 6. Manejo de error si no existe la propiedad
    if (!property) {
        return (
            <div className={styles['property-details__error']}>
                Property Not Found
            </div>
        );
    }

    // 7. Renderizado: Mantenemos TU estructura exacta y Tus estilos
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
                    // Fallback visual por si la imagen de la BD falla
                    onError={(e) => { e.target.src = '/images/exampleHouse.svg'; }}
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
                            {/* Nota: El adaptador del servicio devuelve 'baths' */}
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
                        {/* El servicio se encarga de que 'features' sea siempre un array */}
                        {property.features && property.features.map((feature, index) => (
                            <li key={index} className={styles['property-details__feature-item']}>
                                <FaCheck color="green" size={14} /> {feature}
                            </li>
                        ))}
                    </ul>
                    <LocationMap location={property.location} />
                    {/* Pasamos la propiedad actual para excluirla de los similares si es necesario */}
                    <SimilarProperties currentProperty={property} />
                </div>
                <aside className={styles['property-details__sidebar']}>
                    {/* El servicio ya adaptó el objeto 'agent' para que tenga name, photo, phone */}
                    <AgentCard agent={property.agent} />
                    <ContactForm propertyId={property.id} />
                </aside>

            </div>
        </div>
    );
};

export default PropertyDetailsPage;