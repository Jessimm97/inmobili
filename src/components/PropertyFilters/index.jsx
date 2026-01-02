import React, { useState } from 'react';
import { FaSearch, FaUndo } from 'react-icons/fa'; // Asegúrate de tener react-icons
import styles from './PropertyFilters.module.css';

const PropertyFilters = ({ onFilterChange }) => {
    // Estado local del formulario
    const [filters, setFilters] = useState({
        keyword: '', // Nuevo campo para Elasticsearch
        bedrooms: 'all',
        maxPrice: ''
    });

    // Maneja los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    // Envía los filtros al padre solo cuando damos click en "Buscar"
    const handleSearch = () => {
        onFilterChange(filters);
    };

    // Resetea todo
    const handleReset = () => {
        const reset = { keyword: '', bedrooms: 'all', maxPrice: '' };
        setFilters(reset);
        onFilterChange(reset); // Llama al padre con los filtros limpios
    };

    return (
        <div className={styles['filters']}>
            {/* GRUPO 1: Búsqueda por Texto (Elasticsearch) */}
            <div className={`${styles['filters__group']} ${styles['filters__group--wide']}`}>
                <label className={styles['filters__label']}>Buscar</label>
                <div className={styles['filters__input-wrapper']}>
                    <FaSearch className={styles['filters__icon']} />
                    <input 
                        type="text" 
                        name="keyword" 
                        placeholder="Ubicación, título, detalles..."
                        value={filters.keyword} 
                        onChange={handleChange}
                        className={styles['filters__input']}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
            </div>

            {/* GRUPO 2: Habitaciones */}
            <div className={styles['filters__group']}>
                <label className={styles['filters__label']}>Habitaciones</label>
                <select 
                    name="bedrooms" 
                    value={filters.bedrooms} 
                    onChange={handleChange}
                    className={styles['filters__select']}
                >
                    <option value="all">Cualquiera</option>
                    <option value="1">1+ </option>
                    <option value="2">2+ </option>
                    <option value="3">3+ </option>
                    <option value="4">4+ </option>
                </select>
            </div>

            {/* GRUPO 3: Precio Máximo */}
            <div className={styles['filters__group']}>
                <label className={styles['filters__label']}>Precio Máx ($)</label>
                <input 
                    type="number" 
                    name="maxPrice" 
                    placeholder="Ej. 500000"
                    value={filters.maxPrice} 
                    onChange={handleChange}
                    className={styles['filters__input']}
                />
            </div>

            {/* GRUPO 4: Botones de Acción */}
            <div className={styles['filters__actions']}>
                <button 
                    className={`${styles['filters__btn']} ${styles['filters__btn--primary']}`}
                    onClick={handleSearch}
                >
                    Buscar
                </button>
                <button 
                    className={`${styles['filters__btn']} ${styles['filters__btn--secondary']}`}
                    onClick={handleReset}
                    title="Limpiar filtros"
                >
                    <FaUndo />
                </button>
            </div>
        </div>
    );
};

export default PropertyFilters;