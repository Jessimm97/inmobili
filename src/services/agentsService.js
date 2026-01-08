const API_URL = 'http://18.224.69.91:8080/api/v1/agents';

export const getAllAgents = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error fetching agents');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};