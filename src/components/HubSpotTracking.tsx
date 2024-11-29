import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function HubSpotTracking() {
  const location = useLocation();

  useEffect(() => {
    // Trigger HubSpot tracking on route change
    if ((window as any).hubspot) {
      (window as any).hubspot.refresh();
    }
  }, [location]);

  return null;
}