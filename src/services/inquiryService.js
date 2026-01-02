const API_URL = 'http://localhost:8080/api/v1/inquiries';

export const createInquiry = async (inquiryData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inquiryData),
        });

        if (!response.ok) throw new Error('Error enviando contacto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};