import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    // 1. We listen to the "pathname" (the URL)
    const { pathname } = useLocation();

    // 2. Run this effect every time the pathname changes
    useEffect(() => {
        // 3. Force window to scroll to top-left (0,0)
        window.scrollTo(0, 0);
    }, [pathname]); // <--- Dependency array: runs when 'pathname' updates
};

export default useScrollToTop;