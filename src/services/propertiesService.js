const API_URL = 'http://localhost:8080/api/v1/properties';

// --- FUNCIÓN ADAPTADORA (TRADUCTOR) ---
const adaptProperty = (backendData) => {
    return {
        id: backendData.id,
        title: backendData.title,
        location: backendData.location,
        price: backendData.price,
        description: backendData.description,
        
        // 1. TRADUCCIÓN DE CAMPOS (Backend -> Frontend)
        bedrooms: backendData.bedrooms,
        baths: backendData.bathrooms, // El componente espera 'baths'
        stories: backendData.stories,
        
        // 2. MANEJO DE IMÁGENES (Fallback)
        // Si la imagen viene vacía o rota, usamos la de ejemplo para que no se vea feo
        img: backendData.img && backendData.img.startsWith('/') 
             ? backendData.img 
             : '/images/exampleHouse.svg', 

        // 3. DATOS FALTANTES (Hardcode temporal)
        // Como aun no guardamos features en BD, ponemos unos por defecto
        features: backendData.features || ["Vista al Mar", "Seguridad 24/7", "Cocina Integral"],

        // 4. EL AGENTE (Objeto vs ID)
        // Si lograste conectar Feign, backendData.agentData traerá los datos.
        // Si no, creamos un agente "Genérico" para que no explote el Frontend.
        agent: backendData.agentData ? {
            name: backendData.agentData.name,
            phone: backendData.agentData.phone,
            photo: backendData.agentData.photoUrl || '/images/agent1.jpg'
        } : {
            name: "Agente InmobiliApp",
            phone: "555-0000",
            photo: "/images/agent1.jpg" // Asegúrate de tener una foto aquí
        }
    };
};

export const getAllProperties = async () => {
    try {
        console.log("1. Iniciando Fetch..."); // <--- LOG 1
        const response = await fetch(API_URL);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        console.log("2. Datos Crudos del Backend:", data); // <--- LOG 2
        
        // Verificar si es un array
        if (!Array.isArray(data)) {
            console.error("ERROR: El backend no devolvió un array", data);
            return [];
        }

        const adaptedData = data.map(item => adaptProperty(item));
        console.log("3. Datos Adaptados:", adaptedData); // <--- LOG 3
        
        return adaptedData;

    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const getPropertyById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        // AQUÍ TRADUCIMOS EL ELEMENTO INDIVIDUAL
        return adaptProperty(data);

    } catch (error) {
        console.error('Error fetching property:', error);
        return null;
    }
};

export const searchProperties = async (filters) => {
    try {
        // 1. Construimos los parámetros de la URL (Query Params)
        const params = new URLSearchParams();

        if (filters.keyword) params.append('keyword', filters.keyword);
        
        // Convertimos 'all' a null o simplemente no lo enviamos
        if (filters.bedrooms && filters.bedrooms !== 'all') {
            params.append('minBedrooms', filters.bedrooms);
        }
        
        if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);

        // 2. Hacemos el fetch al endpoint de búsqueda
        // Nota: Asumimos que tu backend tendrá un endpoint /search o aceptará params en la raíz
        const response = await fetch(`${API_URL}/search?${params.toString()}`);

        if (!response.ok) throw new Error('Error en la búsqueda');
        
        const data = await response.json();
        
        // 3. Reutilizamos el adaptador para que las tarjetas se vean bien
        return data.map(item => adaptProperty(item));

    } catch (error) {
        console.error('Error searching properties:', error);
        return [];
    }
};


export const createProperty = async (propertyData) => {
    // ... el create se queda igual ...
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(propertyData),
        });
        if (!response.ok) throw new Error('Error creating property');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};