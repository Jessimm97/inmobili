import { useEffect } from 'react';

const useDocumentTitle = (title) => {
    useEffect(() => {
        // Update the document title
        document.title = `${title} | InmobiliApp`;

        // Optional: Reset title when leaving component (Cleanup function)
        return () => {
            document.title = 'InmobiliApp';
        };
    }, [title]);
};

export default useDocumentTitle;