import React, { useMemo } from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

export function StoreMap({
  corporateName,
  lat,
  lng,
}: {
  corporateName: string;
  lat: number;
  lng: number;
}) {
  const libraries = useMemo(() => ['places'], []);

  const mapCenter = useMemo(
    () => ({
      lat,
      lng,
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
        width: '1150px',
        height: '400px',
        marginBottom: '4rem',
        borderRadius: '0.5rem',
      }}
    >
      <MarkerF label={corporateName} position={mapCenter} />
    </GoogleMap>
  );
}
