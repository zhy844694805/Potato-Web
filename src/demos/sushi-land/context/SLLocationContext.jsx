/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getLocationBySlug } from '../data/siteData';

const SLLocationContext = createContext();

export function SLLocationProvider({ children }) {
  const { locationSlug } = useParams();

  const location = useMemo(() => {
    return getLocationBySlug(locationSlug);
  }, [locationSlug]);

  if (!location) {
    return <Navigate to="/demo/sushi-land" replace />;
  }

  return (
    <SLLocationContext.Provider value={location}>
      {children}
    </SLLocationContext.Provider>
  );
}

export function useSLLocation() {
  const context = useContext(SLLocationContext);
  if (!context) {
    throw new Error('useSLLocation must be used within a SLLocationProvider');
  }
  return context;
}
