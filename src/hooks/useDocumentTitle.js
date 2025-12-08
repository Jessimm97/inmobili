import { useEffect } from 'react';

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | InmobiliApp`;

        return () => {
            document.title = 'InmobiliApp';
        };
    }, [title]);
};

export default useDocumentTitle;