const API_URL = '/api/v1/agents';

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