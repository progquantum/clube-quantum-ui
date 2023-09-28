import React, { useMemo } from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

import mapStyles from './mapStyles.json';
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
      styles: mapStyles,
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

  const iconOptions = {
    scaledSize: new google.maps.Size(30, 30),
    labelOrigin: new google.maps.Point(50, 15),
  };

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{
        width: '100%',
        height: '400px',
        marginBottom: '4rem',
        borderRadius: '0.5rem',
      }}
    >
      <MarkerF
        position={mapCenter}
        options={{
          label: { fontWeight: '700', text: 'Você' },
          icon: {
            ...iconOptions,
            anchor: new google.maps.Point(mapCenter.lat, mapCenter.lng),
            url: 'images/primary-marker.svg',
          },
        }}
      />
      {establishments.length > 0 &&
        establishments.map((establishment: EstablishmentLocation) => (
          <MarkerF
            key={establishment.corporate_name}
            position={{
              lat: Number(establishment.latitude),
              lng: Number(establishment.longitude),
            }}
            options={{
              label: { fontWeight: '700', text: establishment.corporate_name },
              icon: {
                ...iconOptions,
                labelOrigin: new google.maps.Point(15, -10),
                anchor: new google.maps.Point(
                  Number(establishment.latitude),
                  Number(establishment.longitude),
                ),
                url: 'images/establishment-marker.svg',
              },
            }}
          />
        ))}
    </GoogleMap>
  );
}
