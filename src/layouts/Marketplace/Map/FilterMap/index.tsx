import React, { useMemo } from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

import { FilterMapProps, EstablishmentLocation } from './types';

export function FilterMap({ establishments, userLocation }: FilterMapProps) {
  const libraries = useMemo(() => ['places'], []);

  const mapCenter = useMemo(
    () => ({
      lat: Number(userLocation.latitude),
      lng: Number(userLocation.longitude),
    }),
    [],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Carregando...</p>;
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{
        width: '735px',
        height: '400px',
        marginBottom: '4rem',
        borderRadius: '0.5rem',
      }}
    >
      <MarkerF label="Você" position={mapCenter} />
      {establishments.length > 0 &&
        establishments.map((establishment: EstablishmentLocation) => (
          <MarkerF
            key={establishment.corporate_name}
            label={establishment.corporate_name}
            position={{
              lat: Number(establishment.latitude),
              lng: Number(establishment.longitude),
            }}
          />
        ))}
    </GoogleMap>
  );
}
