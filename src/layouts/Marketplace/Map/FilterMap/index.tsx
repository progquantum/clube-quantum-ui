import { useEffect, useMemo, useRef } from 'react';

import { loader } from 'utils/googleMapsLoader';

import { EstablishmentLocation, FilterMapProps } from './types';

export function FilterMap({ establishments, userLocation }: FilterMapProps) {
  const mapRef = useRef(null);

  const mapOptions = useMemo(
    () => ({
      center: { lat: userLocation.latitude, lng: userLocation.longitude },
      zoom: 16,
    }),
    [userLocation.latitude, userLocation.longitude],
  );

  useEffect(() => {
    loader.load().then(google => {
      const map = new google.maps.Map(mapRef.current, mapOptions);

      establishments.forEach((establishment: EstablishmentLocation) => {
        const markerOptions = {
          title: establishment.corporate_name,
          position: {
            lat: establishment.latitude,
            lng: establishment.longitude,
          },
          map,
        };

        const marker = new google.maps.Marker(markerOptions);
      });
    });
  }, [establishments]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px', marginBottom: '4rem' }}
    />
  );
}
