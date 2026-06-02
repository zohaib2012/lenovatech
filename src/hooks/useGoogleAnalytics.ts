import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId || gaId === 'G-XXXXXXXXXX') return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', gaId);

    gtag('config', gaId, { page_path: location.pathname + location.search });
  }, [location]);
}
